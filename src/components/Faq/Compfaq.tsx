"use client";
import { useState } from 'react';

const faqs = [
  {
    question: 'Do I get a free trial?',
    answer: 'No, we don\'t offer a free trial. If you wish to have a live demo of the product shoot us an email at info@jobsquad.com and we will be happy to assist you.',
  },
  {
    question: 'What is your refund policy?',
    answer: 'Our refund policy is...',
  },
  {
    question: 'Do I get free updates?',
    answer: 'Yes, you get free updates...',
  },
  {
    question: 'Do I get support and tutorials on how to start?',
    answer: 'Yes, we provide support and tutorials...',
  },
  {
    question: 'How will you bill me?',
    answer: 'You will be billed via...',
  },
  {
    question: 'Is there any limit on number of applications?',
    answer: 'There is no limit on the number of applications...',
  },
];

const Compfaq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => toggleFaq(index)}
            className="w-full text-left bg-blue-600 text-white px-4 py-2 rounded-lg focus:outline-none"
          >
            {faq.question}
            <span className="float-right">{openIndex === index ? '▲' : '▼'}</span>
          </button>
          {openIndex === index && (
            <div className=" p-4 rounded-b-lg bg-white text-black">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Compfaq;
