import { LocateIcon, PhoneCall, ShieldCheck } from 'lucide-react';
import React from 'react';
import img1 from '../../../assets/live-tracking.png'
import img2 from '../../../assets/safe-delivery.png'
import img3 from '../../../assets/tiny-deliveryman.png'

const features = [
    {
        icon: img1,
        title: "Live Parcel Tracking",
        description:
            "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.",
    },
    {
        icon: img2,
        title: "100% Safe Delivery",
        description:
            "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    },
    {
        icon: img3,
        title: "24/7 Call Center Support",
        description:
            "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    },
];

const FeaturesList = () => {
    return (
        <div className="bg-[#f1f4f6] py-10 px-4 space-y-6 m-4 rounded-2xl">
            {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                    <div key={index} className="flex  items-center bg-white rounded-xl shadow-sm p-6 gap-6">
                        <div className="w-1/5 flex justify-center">
                            <img src={feature.icon} alt={feature.title} className="h-40 w-40 object-contain" />
                        </div>
                        <div className="border-l border-dashed border-gray-400 h-34 ml-4"></div>
                        <div className="w-4/5">
                            <h4 className="text-lg font-bold text-[#03373D] mb-1">{feature.title}</h4>
                            <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                    </div>
                );
            })}
        </div >
    );
};

export default FeaturesList;