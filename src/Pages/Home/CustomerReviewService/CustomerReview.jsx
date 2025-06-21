import React, { useState } from "react";
import reviewLogo from '../../../assets/reviewQuote.png'

const cardData = [
    {
        title: "Booking Pick & Drop",
        description: "The pick and drop service was super smooth and timely. I didn’t have to call anyone — everything was managed perfectly through the app. Great job by the delivery team!",
        image: reviewLogo,
    },
    {
        title: "Cash On Delivery",
        description: "I was skeptical at first, but their cash-on-delivery process is very secure. The delivery man gave me a receipt instantly. Definitely using again!",
        image: reviewLogo,
    },
    {
        title: "Delivery Hub",
        description: "Their delivery hub service is well-managed and efficient. I visited once for a return, and the staff was really helpful. Highly recommended for business use!",
        image: reviewLogo,
    },
    {
        title: "Booking SME & Corporate",
        description: "We’ve been using their SME service for over 6 months now. From bulk booking to daily support — everything is reliable. Works great for small eCommerce startups!",
        image: reviewLogo,
    },
    {
        title: "Return Management",
        description: "My customer wanted to return a product. I requested it through the portal, and they handled everything. Refund processed within 3 days. Excellent service!",
        image: reviewLogo,
    },
    {
        title: "Live Parcel Tracking",
        description: "Real-time tracking is a lifesaver. I was able to monitor the parcel from pickup to delivery, with timely SMS updates. It builds real trust with customers.",
        image: reviewLogo,
    },
    {
        title: "Customer Support",
        description: "Had a delivery issue once and contacted support — they responded in under 10 minutes and solved it the same day. Friendly and professional team.",
        image: reviewLogo,
    },
    {
        title: "Warehouse Services",
        description: "We outsourced our inventory to their warehouse and it’s been stress-free ever since. Fast dispatch and detailed stock reports are a big plus.",
        image: reviewLogo,
    },
    {
        title: "API Integration",
        description: "Integration was very simple. Their tech support helped me connect my online store within hours. It updates delivery status automatically. Super useful!",
        image: reviewLogo,
    },
    {
        title: "Bulk Delivery",
        description: "Needed to send 200 packages during Eid campaign. They picked everything up and delivered on time. Affordable and scalable solution.",
        image: reviewLogo,
    },
    {
        title: "Next Day Delivery",
        description: "Promised next day — and delivered next day. No excuses, no delays. My customers were impressed with the speed!",
        image: reviewLogo,
    },
    {
        title: "Same Day Delivery",
        description: "Fastest service I’ve seen so far. Placed the order at 10AM, and it was delivered by 4PM. This helps in emergency deliveries a lot.",
        image: reviewLogo,
    },
    {
        title: "E-commerce Fulfillment",
        description: "They handle packaging, storing, and shipping for my online store. I’ve saved hours every week. Their accuracy rate is above 99%.",
        image: reviewLogo,
    },
    {
        title: "Pickup Point Service",
        description: "I selected a nearby pickup point and collected the parcel after work. Very convenient and safe. No need to wait at home all day.",
        image: reviewLogo,
    },
    {
        title: "Delivery Confirmation",
        description: "Every delivery comes with confirmation via SMS and email. My customers feel more confident ordering again. It’s a small but powerful feature.",
        image: reviewLogo,
    },
    {
        title: "Fragile Item Handling",
        description: "Sent a delicate glass set — it arrived intact! They bubble-wrapped and handled it professionally. A++ for careful delivery.",
        image: reviewLogo,
    },
    {
        title: "Rider App Support",
        description: "The rider called me through the app when he was nearby. Very well-managed and GPS system is accurate. Loved the experience!",
        image: reviewLogo,
    },
    {
        title: "Cash Reconciliation",
        description: "Every cash delivery I got was properly recorded and reflected in my dashboard. No confusion, no missing money. Very transparent.",
        image: reviewLogo,
    },
    {
        title: "Multi-vendor Support",
        description: "We operate a marketplace and they manage each vendor separately. It helped streamline returns and delivery tracking for each seller.",
        image: reviewLogo,
    },
    {
        title: "Delivery Report Dashboard",
        description: "The reporting dashboard gives me insights into delivery success rates, returns, delays, and revenue. Helps me make better decisions!",
        image: reviewLogo
    },
];

const CustomerReview = () => {
    const [currentPage, setCurrentPage] = useState(0);
    // const [itemPerPage, setItemPerPage] = useState(10);
    // const numberOfPage = Math.ceil(cardData.length/ itemPerPage)
    // const pageNumber = [...Array(numberOfPage).keys()];


    const handleNext = () => {
        if (currentPage < cardData.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const { title, description, image } = cardData[currentPage];

    return (
        <section className="w-full max-w-2xl mx-auto p-6">
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-all duration-300">
                <img
                    src={image}
                    alt={title}
                    className="h-32 w-32 object-contain mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
            </div>

            <div className="flex justify-between items-center mt-6">
                <button
                    onClick={handlePrevious}
                    disabled={currentPage === 0}
                    className={`px-4 py-2 rounded-full font-semibold transition ${currentPage === 0
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-[#03373D] text-white hover:bg-[#055057]"
                        }`}
                >
                    Previous
                </button>

                <span className="text-sm text-gray-700">
                    {currentPage + 1} of {cardData.length}
                </span>

                <button
                    onClick={handleNext}
                    disabled={currentPage === cardData.length - 1}
                    className={`px-4 py-2 rounded-full font-semibold transition ${currentPage === cardData.length - 1
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-[#03373D] text-white hover:bg-[#055057]"
                        }`}
                >
                    Next
                </button>
            </div>
        </section>
    );
};

export default CustomerReview;
