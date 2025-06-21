import React from 'react';

const faqData = [
    {
        question: "How does this posture corrector work?",
        answer: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day."
    },
    {
        question: "Is it suitable for all ages and body types?",
        answer: "Yes, most posture correctors are adjustable and can fit a wide range of body sizes and age groups comfortably."
    },
    {
        question: "Does it really help with back pain and posture improvement?",
        answer: "Yes, with consistent use, posture correctors can reduce back pain and train your muscles for better posture habits."
    },
    {
        question: "Does it have smart features like vibration alerts?",
        answer: "Some advanced models come with built-in sensors that gently vibrate to alert you when you're slouching."
    },
    {
        question: "How will I be notified when the product is back in stock?",
        answer: "Simply sign up on the product page, and you'll receive an email or SMS when it becomes available again."
    },
    {
        question: "Can I wear it under my clothes?",
        answer: "Absolutely. Most posture correctors are designed to be slim and discreet enough to wear under regular clothing."
    },
    {
        question: "How long should I wear it per day?",
        answer: "It’s recommended to start with 15–30 minutes per day and gradually increase to 1–2 hours as your body adjusts."
    },
    {
        question: "Is it washable?",
        answer: "Yes, most posture correctors are made from washable materials. Hand wash is usually recommended."
    },
    {
        question: "Will it restrict my movement?",
        answer: "No, it allows for normal movement while gently pulling your shoulders back to encourage better posture."
    },
]


const FaqQuestion = () => {
    return (
        <div>
            {faqData.map((data, index) => (
                <div
                    key={index}
                    className="bg-white border border-base-300 collapse mb-2 rounded-2xl"
                >
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-gray-200 text-black peer-checked:bg-green-500 peer-checked:text-white font-medium">
                        {data.question}
                    </div>
                    <div className="collapse-content bg-gray-200 text-black peer-checked:bg-green-500 peer-checked:text-white">
                        {data.answer}
                    </div>
                </div>
            ))}

        </div>
    );
};

export default FaqQuestion;