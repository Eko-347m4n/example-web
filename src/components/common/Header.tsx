
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

interface HeaderProps {
  category?: string;
}

export const Header = ({ category }: HeaderProps) => {
  const basePath = category ? `/${category}` : '';

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">Logo</div>
        <nav className="hidden md:flex space-x-6">
          <Link href={`${basePath}/`} className="text-gray-600 hover:text-gray-800">Beranda</Link>
          <Link href={`${basePath}/about`} className="text-gray-600 hover:text-gray-800">Tentang</Link>
          <Link href={`${basePath}/contact`} className="text-gray-600 hover:text-gray-800">Kontak</Link>
        </nav>
        <Button>Mulai</Button>
      </div>
    </header>
  );
};
