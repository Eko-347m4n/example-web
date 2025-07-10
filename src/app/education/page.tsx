
import React from 'react';
import { Header } from '@/components/common/Header';
import { HeroSection } from '@/components/common/HeroSection';
import { Footer } from '@/components/common/Footer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

const EducationPage = () => {
  return (
    <div className="bg-blue-50">
      <Header category="education" />
      <HeroSection 
        businessName="Akademi Ilmu Pengetahuan"
        description="Buka potensi Anda dengan kursus yang dipimpin oleh para ahli kami."
        imageUrl="https://via.placeholder.com/1500x600"
      />
      <main className="container mx-auto px-4 py-8">
        <section id="programs" className="my-8">
          <h2 className="text-3xl font-bold text-center mb-4 text-blue-800">Program Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-blue-200 border-2">
              <div className="p-4">
                <h3 className="text-xl font-bold text-blue-700">Program 1</h3>
                <p className="text-gray-600">Deskripsi program pertama.</p>
              </div>
            </Card>
            <Card className="border-blue-200 border-2">
              <div className="p-4">
                <h3 className="text-xl font-bold text-blue-700">Program 2</h3>
                <p className="text-gray-600">Deskripsi program kedua.</p>
              </div>
            </Card>
            <Card className="border-blue-200 border-2">
              <div className="p-4">
                <h3 className="text-xl font-bold text-blue-700">Program 3</h3>
                <p className="text-gray-600">Deskripsi program ketiga.</p>
              </div>
            </Card>
          </div>
        </section>
        <section id="brochure" className="text-center my-8 bg-blue-100 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4 text-blue-800">Unduh Brosur Kami</h2>
          <Button className="bg-blue-600 hover:bg-blue-700">Unduh Sekarang</Button>
        </section>
      </main>
      <Footer category="education" />
    </div>
  );
};

export default EducationPage;
