import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const MyParcels = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const { data: parcels = [], refetch } = useQuery({
        queryKey: ['my-parcels', user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user.email}`)
            return res.data;
        }

    })
    // console.log(parcels)
    const handleDelete = (parcel) => {
        Swal.fire({
            title: "Are you sure?",
            text: `Delete parcel: ${parcel.parcelName}?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure
                    .delete(`/parcels/${parcel._id}`)
                    .then((res) => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire("Deleted!", "Your parcel has been deleted.", "success");
                            refetch();
                        } else {
                            Swal.fire("Not Found", "No parcel was deleted.", "warning");
                        }
                    })
                    .catch(() => {
                        Swal.fire("Error!", "Something went wrong.", "error");
                    });
            } else {
                Swal.fire("Cancelled", "Your parcel is safe!", "info");
            }
        });
    };


    const getParcelType = (parcel) => {
        if (parcel.itemType || parcel.declaredValue) {
            return "Non-Document";
        }
        return "Document";
    };

    const handlePay = (parcelId) => {
        console.log("Pay button clicked for parcel ID:", parcelId);
        navigate(`/deshboard/payment/${parcelId}`);
    };
    const handleView = (parcel) => {
        alert(
            `Parcel Details:\n\nName: ${parcel.parcelName}\nTracking ID: ${parcel.trackingId}\nCost: ৳${parcel.cost}\nPayment Status: ${parcel.payment_status}`
        );
    };

    return (
        <div className="max-w-7xl mx-auto py-5 px-2">
            <h2 className="text-xl font-semibold mb-4">My Parcels</h2>
            <div className="overflow-x-auto">
                <table className="w-full bg-transparent text-sm">
                    <thead>
                        <tr className="text-left bg-transparent">
                            <th className="px-3 py-1.5">#</th>
                            <th className="px-3 py-1.5">Type</th>
                            <th className="px-3 py-1.5">Cost</th>
                            <th className="px-3 py-1.5">Created At</th>
                            <th className="px-3 py-1.5">Payment</th>
                            <th className="px-3 py-1.5">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {parcels.map((parcel, index) => (
                            <tr key={parcel._id} className="text-center bg-transparent">
                                <td className="px-3 py-1.5">{index + 1}</td>
                                <td className="px-3 py-1.5">{getParcelType(parcel)}</td>
                                <td className="px-3 py-1.5">৳{parcel.cost}</td>
                                <td className="px-3 py-1.5 whitespace-nowrap">
                                    {new Date(parcel.creation_date).toLocaleString()}
                                </td>
                                <td
                                    className={`px-3 py-1.5 font-semibold rounded ${parcel.payment_status === "paid"
                                        ? "text-green-800 border rounded-xl"
                                        : "text-red-800 border rounded-xl"
                                        }`}
                                >
                                    {parcel.payment_status}
                                </td>
                                <td className="px-3 py-1.5 space-x-2">
                                    <button
                                        onClick={() => handleView(parcel)}
                                        className="px-3 py-1 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition-colors duration-200 cursor-pointer text-xs"
                                    >
                                        View
                                    </button>
                                    <button
                                        onClick={() => handlePay(parcel._id)}
                                        disabled={parcel.payment_status === "paid"}
                                        className={`px-3 py-1 border rounded transition-colors duration-200 text-xs ${parcel.payment_status === "paid"
                                                ? "border-gray-400 text-gray-400 cursor-not-allowed"
                                                : "border-green-600 text-green-600 hover:bg-green-600 hover:text-white cursor-pointer"
                                            }`}
                                    >
                                        Pay
                                    </button>
                                    <button
                                        onClick={() => handleDelete(parcel)}
                                        className="px-3 py-1 border border-red-600 text-red-600 rounded hover:bg-red-600 hover:text-white transition-colors duration-200 cursor-pointer text-xs"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );


};

export default MyParcels;