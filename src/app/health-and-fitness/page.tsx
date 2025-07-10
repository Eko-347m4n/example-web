
import React from 'react';
import { Header } from '@/components/common/Header';
import { HeroSection } from '@/components/common/HeroSection';
import { Footer } from '@/components/common/Footer';
import { Card } from '@/components/ui/Card';

const HealthAndFitnessPage = () => {
  return (
    <div className="bg-green-50">
      <Header category="health-and-fitness" />
      <HeroSection 
        businessName="Studio Hidup Sehat"
        description="Perjalanan Anda menuju hidup yang lebih sehat dimulai di sini."
        imageUrl="https://via.placeholder.com/1500x600"
      />
      <main className="container mx-auto px-4 py-8">
        <section id="trainers" className="my-8">
          <h2 className="text-3xl font-bold text-center mb-4 text-green-800">Pelatih Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-green-200 border-2">
              <img src="https://via.placeholder.com/300" alt="Pelatih 1" className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h3 className="text-xl font-bold text-green-700">Jane Doe</h3>
                <p className="text-gray-600">Pelatih Pribadi Bersertifikat</p>
              </div>
            </Card>
            <Card className="border-green-200 border-2">
              <img src="https://via.placeholder.com/300" alt="Pelatih 2" className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h3 className="text-xl font-bold text-green-700">John Smith</h3>
                <p className="text-gray-600">Instruktur Yoga</p>
              </div>
            </Card>
            <Card className="border-green-200 border-2">
              <img src="https://via.placeholder.com/300" alt="Pelatih 3" className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h3 className="text-xl font-bold text-green-700">Emily Jones</h3>
                <p className="text-gray-600">Ahli Gizi</p>
              </div>
            </Card>
          </div>
        </section>
        <section id="schedule" className="my-8">
          <h2 className="text-3xl font-bold text-center mb-4 text-green-800">Jadwal Kelas</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-green-100">
                <tr>
                  <th className="py-2 px-4 border-b border-green-200 text-green-800">Waktu</th>
                  <th className="py-2 px-4 border-b border-green-200 text-green-800">Senin</th>
                  <th className="py-2 px-4 border-b border-green-200 text-green-800">Selasa</th>
                  <th className="py-2 px-4 border-b border-green-200 text-green-800">Rabu</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b border-green-200">09:00 AM</td>
                  <td className="py-2 px-4 border-b border-green-200">Yoga</td>
                  <td className="py-2 px-4 border-b border-green-200">HIIT</td>
                  <td className="py-2 px-4 border-b border-green-200">Yoga</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-green-200">11:00 AM</td>
                  <td className="py-2 px-4 border-b border-green-200">Pilates</td>
                  <td className="py-2 px-4 border-b border-green-200">Zumba</td>
                  <td className="py-2 px-4 border-b border-green-200">Pilates</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <Footer category="health-and-fitness" />
    </div>
  );
};

export default HealthAndFitnessPage;
