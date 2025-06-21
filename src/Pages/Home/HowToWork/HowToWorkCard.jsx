import React from 'react';
import bookingIcon from '../../../assets/bookingIcon.png'

const cardData = [
    {
        title: "Booking Pick & Drop",
        description: "Easily schedule pickups and deliveries from anywhere.",
        img:bookingIcon ,
    },
    {
        title: "Cash On Delivery",
        description: "Deliver first, collect later — we ensure safe cash handling.",
        img:bookingIcon,
    },
    {
        title: "Delivery Hub",
        description: "Our hubs are everywhere to serve your logistics faster.",
        img:bookingIcon,
    },
    {
        title: "Booking SME & Corporate",
        description: "Smart solutions tailored for businesses and corporates.",
        img: bookingIcon,
    },
];

const HowToWorkCard = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
            {cardData.map((item, index) => (
                <div
                    key={index}
                    className="bg-white rounded-xl shadow-md p-4 flex flex-col "
                >
                    <img src={item.img} alt={item.title} className="h-20 mb-4 object-contain" />
                    <h3 className="text-lg font-semibold text-[#03373D] mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                </div>
            ))}
        </div>
    );
};
export default HowToWorkCard;