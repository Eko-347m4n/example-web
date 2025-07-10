
import React from 'react';
import { Header } from '@/components/common/Header';
import { HeroSection } from '@/components/common/HeroSection';
import { Footer } from '@/components/common/Footer';
import { Button } from '@/components/ui/Button';

const ProfessionalServicesPage = () => {
  return (
    <div className="bg-gray-50">
      <Header category="professional-services" />
      <HeroSection 
        businessName="Solusi Ahli Inc."
        description="Menyediakan layanan profesional terbaik."
        imageUrl="https://via.placeholder.com/1500x600"
      />
      <main className="container mx-auto px-4 py-8">
        <section id="services" className="my-8">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Layanan Kami</h2>
          <ul className="space-y-4">
            <li className="bg-white p-4 rounded-lg shadow-md">Layanan 1 - $100</li>
            <li className="bg-white p-4 rounded-lg shadow-md">Layanan 2 - $200</li>
            <li className="bg-white p-4 rounded-lg shadow-md">Layanan 3 - $300</li>
          </ul>
        </section>
        <section id="faq" className="my-8 bg-gray-100 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Pertanyaan yang Sering Diajukan</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-gray-700">Pertanyaan 1?</h3>
              <p className="text-gray-600">Jawaban untuk pertanyaan 1.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-700">Pertanyaan 2?</h3>
              <p className="text-gray-600">Jawaban untuk pertanyaan 2.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer category="professional-services" />
    </div>
  );
};

export default ProfessionalServicesPage;
