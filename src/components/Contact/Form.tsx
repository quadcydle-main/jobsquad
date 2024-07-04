'use client';

import { useState } from 'react';
import Image from 'next/image';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setSuccess('Your message has been sent successfully.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message. Please try again later.');
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">We&rsquo;re here to help</h1>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-4">
          <Image src="/path/to/your/image.png" alt="Contact" width={300} height={200} className="mb-4" />
          <h2 className="text-xl font-semibold mb-4">Call us at:</h2>
          <p className="mb-4">+1 (585) 733-6042</p>
          <h2 className="text-xl font-semibold mb-4">Email us:</h2>
          <p className="mb-4">info@jobsquad.com</p>
          <h2 className="text-xl font-semibold mb-4">Social Media</h2>
          <div className="flex space-x-4">
            <Image src="/path/to/your/linkedin.png" alt="LinkedIn" width={24} height={24} />
            <Image src="/path/to/your/instagram.png" alt="Instagram" width={24} height={24} />
            <Image src="/path/to/your/twitter.png" alt="Twitter" width={24} height={24} />
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-xl font-semibold mb-4">Send us a message</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Enter your name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Enter your email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Enter your message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-lg"
                required
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
            {error && <p className="text-red-500 mt-4">{error}</p>}
            {success && <p className="text-green-500 mt-4">{success}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
