import React from 'react';
import heroImg from '../../../assets/location-merchant.png'

const HeroCard = () => {
    return (
        <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" className="bg-[url('assets/be-a-merchant-bg.png')]  bg-[#003e3e]  text-white rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg overflow-hidden bg-no-repeat m-4">
            {/* Left Text Content */}
            <div className="flex-1 basis-full md:basis-3/5 space-y-4 text-center md:text-left">
                <h2 className="text-2xl md:text-4xl font-extrabold leading-tight">
                    Merchant and Customer Satisfaction <br />
                    is Our First Priority
                </h2>
                <p className="text-gray-300 text-sm md:text-base max-w-md">
                    We offer the lowest delivery charge with the highest value along with
                    100% safety of your product. Pathao courier delivers your parcels in every
                    corner of Bangladesh right on time.
                </p>
                <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4">
                    <button className="bg-lime-400 cursor-pointer text-black font-semibold px-6 py-2 rounded-full hover:bg-lime-300 transition">
                        Become a Merchant
                    </button>
                    <button className="border cursor-pointer border-lime-400 text-lime-400 font-semibold px-6 py-2 rounded-full hover:bg-lime-400 hover:text-black transition">
                        Earn with Profast Courier
                    </button>
                </div>
            </div>


            <div className="flex-1 basis-full md:basis-2/5 flex justify-center">
                <img
                    src={heroImg}
                    alt="Courier Illustration"
                    className="max-w-full h-auto object-contain"
                />
            </div>
        </div>
    );
};

export default HeroCard;
