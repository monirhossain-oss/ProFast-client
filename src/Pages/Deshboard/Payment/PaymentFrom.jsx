import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useParams, useNavigate } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';

const PaymentFrom = () => {
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const { parcelId } = useParams();
    const navigate = useNavigate();
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const { user } = useAuth();

    const { isPending, data: parcelInfo = {} } = useQuery({
        queryKey: ["parcel", parcelId],
        queryFn: async () => {
            const res = await axiosSecure.get(`parcels/${parcelId}`);
            return res.data;
        }
    });

    if (isPending) {
        return <span className="loading loading-bars loading-xl"></span>;
    }

    const amount = parcelInfo.cost;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        // SweetAlert Confirm Modal
        const result = await Swal.fire({
            title: 'Are you sure you want to proceed with payment?',
            text: `You will pay $${amount} for this parcel.`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Pay Now',
            cancelButtonText: 'Cancel',
        });

        if (!result.isConfirmed) {
            return; // User cancelled, do nothing
        }

        setProcessing(true);

        if (!stripe || !elements) {
            setError("Stripe is not loaded.");
            setProcessing(false);
            return;
        }

        const card = elements.getElement(CardElement);
        if (!card) {
            setError("Card element not found.");
            setProcessing(false);
            return;
        }

        try {
            // Create Payment Intent
            const { data } = await axiosSecure.post("/create-payment-intent", {
                amount,
                parcelId,
            });

            const clientSecret = data.clientSecret;

            // Confirm Payment
            const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || "Unknown",
                        email: user?.email || "Unknown",
                    },
                },
            });

            if (confirmError) {
                setError(confirmError.message);
                setProcessing(false);
                return;
            }

            if (paymentIntent.status === "succeeded") {
                console.log("✅ Payment succeeded:", paymentIntent);

                // Save payment history and mark parcel paid
                const paymentRecord = {
                    email: user?.email,
                    name: user?.displayName,
                    parcelId,
                    amount,
                    transactionId: paymentIntent.id,
                    currency: paymentIntent.currency,
                    method: paymentIntent.payment_method_types[0] || 'card',
                };

                await axiosSecure.post("/payments", paymentRecord);

                setSuccess("✅ Payment Successful!");
                setError("");

                // SweetAlert Success
                Swal.fire({
                    title: 'Payment Successful!',
                    text: 'Your payment has been completed.',
                    icon: 'success',
                    confirmButtonText: 'Go to Payment History',
                }).then(() => {
                    navigate('/deshboard/payment-history');
                });
            }
        } catch (err) {
            console.error("❌ Payment Error:", err);
            setError("Payment failed. Please try again.");
        } finally {
            setProcessing(false);
        }
    };


    return (
        <div className="max-w-xl p-8 m-8 border rounded">
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: "16px",
                                color: "#ffffff",
                                "::placeholder": { color: "#cccccc" },
                            },
                            invalid: { color: "#ff6b6b" },
                        },
                    }}
                />
                <button
                    className="mt-4 px-8 py-2 cursor-pointer hover:bg-gray-700 mx-auto bg-gray-600 text-white rounded"
                    type="submit"
                    disabled={!stripe || processing || success}
                >
                    {processing ? "Processing..." : success ? "Payment Done" : `Pay $${amount}`}
                </button>
            </form>
            {success && <p className="text-green-600 mt-2">{success}</p>}
            {error && <p className="text-red-600 mt-2">{error}</p>}
        </div>
    );
};

export default PaymentFrom;
