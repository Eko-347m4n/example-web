
import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Landing Pages</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Link href="/restaurant" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold mb-2">Restaurant</h2>
          <p>A landing page for a restaurant.</p>
        </Link>
        <Link href="/retail" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold mb-2">Retail Store</h2>
          <p>A landing page for a retail store.</p>
        </Link>
        <Link href="/professional-services" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold mb-2">Professional Services</h2>
          <p>A landing page for professional services.</p>
        </Link>
        <Link href="/health-and-fitness" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold mb-2">Health & Fitness</h2>
          <p>A landing page for a health and fitness business.</p>
        </Link>
        <Link href="/entertainment" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold mb-2">Entertainment</h2>
          <p>A landing page for an entertainment venue.</p>
        </Link>
        <Link href="/hotel" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold mb-2">Hotel & Accommodation</h2>
          <p>A landing page for a hotel.</p>
        </Link>
        <Link href="/education" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold mb-2">Education</h2>
          <p>A landing page for an educational institution.</p>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
