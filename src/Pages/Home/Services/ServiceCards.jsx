import React from 'react';

const ServiceCards = ({ services }) => {
    return (
        <div className=" py-10 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
                <div key={index} className="hover:bg-[#CAEB66] bg-[#FFFFFF] hover:scale-r-110 hover:translate-y-1 flex flex-col items-center shadow-md rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition duration-300">
                    <div className="mb-4 flex justify-center  text-indigo-500">
                        <service.icon size={32} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm text-center">{service.description}</p>
                </div>

            ))}
        </div>
    );
};

export default ServiceCards;