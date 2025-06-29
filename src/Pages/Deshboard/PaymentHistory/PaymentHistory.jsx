import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [], isPending } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments?email=${user.email}`);
            return res.data;
        }
    });

    if (isPending) {
        return <span className="loading loading-bars loading-lg mx-auto block mt-10"></span>;
    }

    return (
        <div className="max-w-5xl mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-4">📄 Payment History</h2>
            <div className="overflow-x-auto rounded-2xl">
                <table className="min-w-full bg-gray-900 rounded">
                    <thead className="bg-gray-500">
                        <tr>
                            <th className="text-left py-2 px-3">#</th>
                            <th className="text-left py-2 px-3">Transaction ID</th>
                            <th className="text-left py-2 px-3">Amount</th>
                            <th className="text-left py-2 px-3">Parcel ID</th>
                            <th className="text-left py-2 px-3">Date</th>
                            <th className="text-left py-2 px-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment, index) => (
                            <tr key={payment._id} className="border-b hover:bg-green-600">
                                <td className="py-2 px-3">{index + 1}</td>
                                <td className="py-2 px-3 ">{payment.transactionId}</td>
                                <td className="py-2 px-3">${payment.amount}</td>
                                <td className="py-2 px-3">{payment.parcelId}</td>
                                <td className="py-2 px-3">{new Date(payment.createdAt.raw).toLocaleString()}</td>
                                <td className="py-2 px-3">
                                    <span className="text-green-800 font-semibold">Paid</span>
                                </td>
                            </tr>
                        ))}
                        {payments.length === 0 && (
                            <tr>
                                <td colSpan="6" className="py-4 text-center text-gray-50">
                                    No payment history found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;
