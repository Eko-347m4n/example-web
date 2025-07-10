
import React from 'react';
import { Header } from '@/components/common/Header';
import { HeroSection } from '@/components/common/HeroSection';
import { Footer } from '@/components/common/Footer';
import { Button } from '@/components/ui/Button';

const EntertainmentPage = () => {
  return (
    <div className="bg-purple-50">
      <Header category="entertainment" />
      <HeroSection 
        businessName="Zona Hiburan"
        description="Destinasi hiburan utama Anda."
        imageUrl="https://via.placeholder.com/1500x600"
      />
      <main className="container mx-auto px-4 py-8">
        <section id="schedule" className="my-8">
          <h2 className="text-3xl font-bold text-center mb-4 text-purple-800">Jadwal Acara</h2>
          <ul className="space-y-4">
            <li className="bg-purple-100 p-4 rounded-lg text-purple-900">Acara 1 - 19:00</li>
            <li className="bg-purple-100 p-4 rounded-lg text-purple-900">Acara 2 - 20:00</li>
            <li className="bg-purple-100 p-4 rounded-lg text-purple-900">Acara 3 - 21:00</li>
          </ul>
        </section>
        <section id="pricing" className="my-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-purple-800">Harga Tiket</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-2 border-purple-200 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-purple-700">Dasar</h3>
              <p className="text-2xl font-bold text-purple-900">$25</p>
            </div>
            <div className="border-2 border-purple-200 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-purple-700">Premium</h3>
              <p className="text-2xl font-bold text-purple-900">$40</p>
            </div>
            <div className="border-2 border-purple-200 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-purple-700">VIP</h3>
              <p className="text-2xl font-bold text-purple-900">$75</p>
            </div>
          </div>
          <Button className="mt-8 bg-purple-600 hover:bg-purple-700">Beli Tiket</Button>
        </section>
      </main>
      <Footer category="entertainment" />
    </div>
  );
};

export default EntertainmentPage;
