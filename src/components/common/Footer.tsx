
import React from 'react';
import Link from 'next/link';

interface FooterProps {
  category?: string;
}

export const Footer = ({ category }: FooterProps) => {
  const basePath = category ? `/${category}` : '';

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Alamat</h3>
            <p>Jalan Utama 123, Kota Contoh, Indonesia</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Tautan Cepat</h3>
            <ul>
              <li><Link href={`${basePath}/`} className="hover:text-gray-400">Beranda</Link></li>
              <li><Link href={`${basePath}/about`} className="hover:text-gray-400">Tentang</Link></li>
              <li><Link href={`${basePath}/contact`} className="hover:text-gray-400">Kontak</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Media Sosial</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400">Facebook</a>
              <a href="#" className="hover:text-gray-400">Twitter</a>
              <a href="#" className="hover:text-gray-400">Instagram</a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-gray-700">
          <p>&copy; 2025 Perusahaan Anda. Semua Hak Dilindungi.</p>
          <Link href={`${basePath}/privacy`} className="hover:text-gray-400">Kebijakan Privasi</Link>
        </div>
      </div>
    </footer>
  );
};
