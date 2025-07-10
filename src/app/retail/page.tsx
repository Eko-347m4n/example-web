
import React from 'react';
import { Header } from '@/components/common/Header';
import { HeroSection } from '@/components/common/HeroSection';
import { Footer } from '@/components/common/Footer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

const RetailStorePage = () => {
  return (
    <div className="bg-yellow-50">
      <Header category="retail" />
      <HeroSection 
        businessName="Pusat Mode"
        description="Toko serba ada untuk tren terbaru."
        imageUrl="https://via.placeholder.com/1500x600"
      />
      <main className="container mx-auto px-4 py-8">
        <section id="promo" className="my-8 bg-yellow-200 p-8 text-center rounded-lg">
          <h2 className="text-3xl font-bold mb-4 text-yellow-800">Diskon Musim Panas!</h2>
          <p className="text-xl text-yellow-900">Dapatkan diskon hingga 50% untuk item pilihan.</p>
          <Button className="mt-4 bg-yellow-500 hover:bg-yellow-600">Belanja Sekarang</Button>
        </section>
        <section id="catalog" className="my-8">
          <h2 className="text-3xl font-bold text-center mb-4 text-yellow-800">Produk Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="border-yellow-200 border-2">
              <img src="https://via.placeholder.com/300" alt="Produk 1" className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h3 className="text-xl font-bold text-yellow-700">Produk 1</h3>
                <p className="text-gray-600">$19.99</p>
              </div>
            </Card>
            <Card className="border-yellow-200 border-2">
              <img src="https://via.placeholder.com/300" alt="Produk 2" className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h3 className="text-xl font-bold text-yellow-700">Produk 2</h3>
                <p className="text-gray-600">$29.99</p>
              </div>
            </Card>
            <Card className="border-yellow-200 border-2">
              <img src="https://via.placeholder.com/300" alt="Produk 3" className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h3 className="text-xl font-bold text-yellow-700">Produk 3</h3>
                <p className="text-gray-600">$39.99</p>
              </div>
            </Card>
            <Card className="border-yellow-200 border-2">
              <img src="https://via.placeholder.com/300" alt="Produk 4" className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h3 className="text-xl font-bold text-yellow-700">Produk 4</h3>
                <p className="text-gray-600">$49.99</p>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer category="retail" />
    </div>
  );
};

export default RetailStorePage;
