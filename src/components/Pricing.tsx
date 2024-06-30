import React from "react";
import { Container } from "@/components/Container";

const PricingTable = () => {
    return (
        <Container >
            <div id="pricing" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-10">
                <div className="pricing-table gprice-single bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="head border-b border-gray-300 py-6 transition-all duration-500 hover:border-b-2 border-purple-500">
                        <h4 className="title text-xl font-bold">Basic</h4>
                    </div>
                    <div className="content py-6">
                        <div className="price bg-gradient-to-r from-purple-600 to-purple-900 w-24 h-24 mx-auto flex items-center justify-center text-white font-bold rounded-full border-4 border-white shadow-md mb-6 transform transition-all duration-500 hover:scale-105">
                            <h1>$19</h1>
                        </div>
                        <ul className="text-center">
                            <li className="py-2">5 GB Ram</li>
                            <li className="py-2">40GB SSD Cloud Storage</li>
                            <li className="py-2">Month Subscription</li>
                            <li className="py-2">Responsive Framework</li>
                            <li className="py-2 line-through">Monthly Billing Software</li>
                            <li className="py-2 line-through">1 Free Website</li>
                        </ul>
                        <div className="sign-up text-center mt-6">
                            <a href="#" className="btn bordered radius bg-gradient-to-r from-purple-600 to-purple-900 text-white py-3 px-8 inline-block transition-all duration-300 hover:shadow-lg">Signup Now</a>
                        </div>
                    </div>
                </div>
                <div className="pricing-table gprice-single bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="head border-b border-gray-300 py-6 transition-all duration-500 hover:border-b-2 border-purple-500">
                        <h4 className="title text-xl font-bold">Standard</h4>
                    </div>
                    <div className="content py-6">
                        <div className="price bg-gradient-to-r from-purple-600 to-purple-900 w-24 h-24 mx-auto flex items-center justify-center text-white font-bold rounded-full border-4 border-white shadow-md mb-6 transform transition-all duration-500 hover:scale-105">
                            <h1>$29</h1>
                        </div>
                        <ul className="text-center">
                            <li className="py-2">5 GB Ram</li>
                            <li className="py-2">40GB SSD Cloud Storage</li>
                            <li className="py-2">Month Subscription</li>
                            <li className="py-2">Responsive Framework</li>
                            <li className="py-2">Monthly Billing Software</li>
                            <li className="py-2 line-through">1 Free Website</li>
                        </ul>
                        <div className="sign-up text-center mt-6">
                            <a href="#" className="btn bordered radius bg-gradient-to-r from-purple-600 to-purple-900 text-white py-3 px-8 inline-block transition-all duration-300 hover:shadow-lg">Signup Now</a>
                        </div>
                    </div>
                </div>
                <div className="pricing-table gprice-single bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="head border-b border-gray-300 py-6 transition-all duration-500 hover:border-b-2 border-purple-500">
                        <h4 className="title text-xl font-bold">Premium</h4>
                    </div>
                    <div className="content py-6">
                        <div className="price bg-gradient-to-r from-purple-600 to-purple-900 w-24 h-24 mx-auto flex items-center justify-center text-white font-bold rounded-full border-4 border-white shadow-md mb-6 transform transition-all duration-500 hover:scale-105">
                            <h1>$39</h1>
                        </div>
                        <ul className="text-center">
                            <li className="py-2">5 GB Ram</li>
                            <li className="py-2">40GB SSD Cloud Storage</li>
                            <li className="py-2">Month Subscription</li>
                            <li className="py-2">Responsive Framework</li>
                            <li className="py-2">Monthly Billing Software</li>
                            <li className="py-2">1 Free Website</li>
                        </ul>
                        <div className="sign-up text-center mt-6">
                            <a href="#" className="btn bordered radius bg-gradient-to-r from-purple-600 to-purple-900 text-white py-3 px-8 inline-block transition-all duration-300 hover:shadow-lg">Signup Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default PricingTable;
