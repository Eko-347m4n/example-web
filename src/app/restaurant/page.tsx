
import React from 'react';
import { Header } from '@/components/common/Header';
import { HeroSection } from '@/components/common/HeroSection';
import { Footer } from '@/components/common/Footer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

const RestaurantPage = () => {
  return (
    <div className="bg-red-50">
      <Header category="restaurant" />
      <HeroSection 
        businessName="Tempat Kuliner"
        description="Nikmati pengalaman bersantap terbaik di kota."
        imageUrl="https://via.placeholder.com/1500x600"
      />
      <main className="container mx-auto px-4 py-8">
        <section id="menu" className="my-8">
          <h2 className="text-3xl font-bold text-center mb-4 text-red-800">Menu Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-red-200 border-2">
              <img src="https://via.placeholder.com/300" alt="Hidangan 1" className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h3 className="text-xl font-bold text-red-700">Hidangan 1</h3>
                <p className="text-gray-600">Deskripsi lezat dari hidangan pertama.</p>
              </div>
            </Card>
            <Card className="border-red-200 border-2">
              <img src="https://via.placeholder.com/300" alt="Hidangan 2" className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h3 className="text-xl font-bold text-red-700">Hidangan 2</h3>
                <p className="text-gray-600">Deskripsi lezat dari hidangan kedua.</p>
              </div>
            </Card>
            <Card className="border-red-200 border-2">
              <img src="https://via.placeholder.com/300" alt="Hidangan 3" className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h3 className="text-xl font-bold text-red-700">Hidangan 3</h3>
                <p className="text-gray-600">Deskripsi lezat dari hidangan ketiga.</p>
              </div>
            </Card>
          </div>
        </section>
        <section id="reservation" className="text-center my-8 bg-red-100 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4 text-red-800">Buat Reservasi</h2>
          <Button className="bg-red-600 hover:bg-red-700">Pesan Meja</Button>
        </section>
      </main>
      <Footer category="restaurant" />
    </div>
  );
};

export default RestaurantPage;
