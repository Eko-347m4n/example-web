
import React from 'react';
import { Header } from '@/components/common/Header';
import { HeroSection } from '@/components/common/HeroSection';
import { Footer } from '@/components/common/Footer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

const HotelPage = () => {
  return (
    <div className="bg-teal-50">
      <Header category="hotel" />
      <HeroSection 
        businessName="Hotel Agung"
        description="Rasakan kemewahan dan kenyamanan."
        imageUrl="https://via.placeholder.com/1500x600"
      />
      <main className="container mx-auto px-4 py-8">
        <section id="rooms" className="my-8">
          <h2 className="text-3xl font-bold text-center mb-4 text-teal-800">Kamar Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-teal-200 border-2">
              <img src="https://via.placeholder.com/300" alt="Kamar 1" className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h3 className="text-xl font-bold text-teal-700">Kamar Standar</h3>
                <p className="text-gray-600">Kamar yang nyaman dengan semua fasilitas penting.</p>
              </div>
            </Card>
            <Card className="border-teal-200 border-2">
              <img src="https://via.placeholder.com/300" alt="Kamar 2" className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h3 className="text-xl font-bold text-teal-700">Kamar Deluxe</h3>
                <p className="text-gray-600">Kamar luas dengan pemandangan indah.</p>
              </div>
            </Card>
            <Card className="border-teal-200 border-2">
              <img src="https://via.placeholder.com/300" alt="Kamar 3" className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h3 className="text-xl font-bold text-teal-700">Suite</h3>
                <p className="text-gray-600">Pengalaman kemewahan terbaik.</p>
              </div>
            </Card>
          </div>
        </section>
        <section id="booking" className="my-8 bg-teal-100 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-4 text-teal-800">Pesan Penginapan Anda</h2>
          <form className="max-w-lg mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="date" className="border p-2 rounded-lg"/>
              <input type="date" className="border p-2 rounded-lg"/>
              <input type="number" placeholder="Tamu" className="border p-2 rounded-lg"/>
              <Button className="bg-teal-600 hover:bg-teal-700">Cek Ketersediaan</Button>
            </div>
          </form>
        </section>
      </main>
      <Footer category="hotel" />
    </div>
  );
};

export default HotelPage;
