import React from "react";
import { Container } from "@/components/Container";

const pricingData = [
    {
        title: "Basic",
        price: "19",
        features: [
            "5 GB Ram",
            "40GB SSD Cloud Storage",
            "Month Subscription",
            "Responsive Framework",
            "Monthly Billing Software",
            "1 Free Website (line-through)",
        ],
    },
    {
        title: "Standard",
        price: "29",
        features: [
            "5 GB Ram",
            "40GB SSD Cloud Storage",
            "Month Subscription",
            "Responsive Framework",
            "Monthly Billing Software",
            "1 Free Website (line-through)",
        ],
        recommended: true, // Added recommended label
    },
    {
        title: "Premium",
        price: "39",
        features: [
            "5 GB Ram",
            "40GB SSD Cloud Storage",
            "Month Subscription",
            "Responsive Framework",
            "Monthly Billing Software",
            "1 Free Website",
        ],
    },
];

const PricingTable = () => {
    return (
        <Container>
            <p className="text-3xl  md:text-3xl lg:text-4xl lg:mr-10 font-bold text-center mt-10 mb-10">
                Pricing
            </p>
            <div
                id="pricing"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 lg:px-0"
            >
                {pricingData.map((plan, index) => (
                    <div
                        key={index}
                        className="pricegrid"
                    >
                        {plan.recommended && (
                            // Recommended label conditionally
                            <div className="recommended bg-[#3975EA] text-white text-center py-2 px-4 rounded-t-3xl">
                                <span className="text-s">Recommended</span>
                            </div>
                        )}
                        <div className="head py-4 text-center transition-all duration-500">
                            {/* Adjusted font size for title */}
                            <h4 className="title text-2xl md:text-4xl lg:text-xl font-bold text-[#3975EA]">
                                {plan.title}
                            </h4>
                        </div>
                        <div className="content py-4">
                            <div className="price w-20 h-16 text-xl md:text-3xl mx-auto flex items-center justify-center text-[#3975EA] font-bold border-[#3975EA] mb-6">
                                {/* Adjusted font size for price */}
                                <h1>${plan.price}</h1>
                            </div>
                            <ul className="text-center text-[#3975EA]">
                                {plan.features.map((feature, idx) => (
                                    <li
                                        key={idx}
                                        className={`py-2 ${feature.includes("line-through") ? "line-through" : ""
                                            }`}
                                    >
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <div className="sign-up text-center mt-6">
                                <a
                                    href="#"
                                    className="btn bordered radius  bg-[#3975EA]  text-white py-3 px-8 inline-block transition-all duration-300 hover:shadow-lg rounded-[15px]"
                                >
                                    Signup Now
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default PricingTable;
