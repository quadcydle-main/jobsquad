'use client';
import Link from 'next/link';
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

      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-4">
          <Image src="/path/to/your/image.png" alt="Contact" width={300} height={200} className="mb-4" />
          <h2 className="text-xl font-semibold mb-4">Call us at:</h2>
          <p className="mb-4">+1 (585) 733-6042</p>
          <h2 className="text-xl font-semibold mb-4">Email us:</h2>
          <p className="mb-4">info@jobsquad.com</p>
          <h2 className="text-xl font-semibold mb-4">Social Media</h2>
          <div className="flex space-x-4">
            <Link href="/" className="flex justify-center items-center text-purple-600 bg-custom-blue hover:text-gray-100 hover:bg-custom-blue2 rounded-full transition duration-150 ease-in-out" aria-label="Instagram">
              <svg className="w-8 h-8 fill-white" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20.145" cy="11.892" r="1" />
                <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
              </svg>
            </Link>
            <Link href="/" className="flex justify-center items-center text-purple-600 bg-custom-blue hover:text-gray-100 hover:bg-custom-blue2 rounded-full transition duration-150 ease-in-out" aria-label="Linkedin">
              <svg className="w-8 h-8 fill-white" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
              </svg>
            </Link>
            <Link href="/" className="flex justify-center items-center text-purple-600 bg-custom-blue hover:text-gray-100 hover:bg-custom-blue2 rounded-full transition duration-150 ease-in-out" aria-label="Twitter">
              <svg className="w-8 h-8 fill-white" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
              </svg>
            </Link>
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
