import React from 'react';
import ServiceCards from './ServiceCards';
import { Building2, Globe, HandCoins, PackageCheck, RotateCcw, Truck } from 'lucide-react';

const OurServices = () => {
     const services = [
        {
            icon:Truck,
            title: "Express & Standard Delivery",
            description:
                "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
        },
        {
            icon: Globe,
            title: "Nationwide Delivery",
            description:
                "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
        },
        {
            icon: PackageCheck,
            title: "Fulfillment Solution",
            description:
                "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
        },
        {
            icon:HandCoins,
            title: "Cash on Home Delivery",
            description:
                "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
        },
        {
            icon: Building2,
            title: "Corporate Service / Contract In Logistics",
            description:
                "Customized corporate services which includes warehouse and inventory management support.",
        },
        {
            icon:RotateCcw,
            title: "Parcel Return",
            description:
                "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
        },
    ];

    return (
        <div className='bg-black rounded-2xl p-8 mb-8 m-4'>
            <div className='flex flex-col items-center text-center w-[60%] mx-auto'>
                <h2 className='font-extrabold text-3xl'>Our Services</h2>
                <p className='text-gray-300 font-medium'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
            <ServiceCards services={services}></ServiceCards>
        </div>
    );
};

export default OurServices;