
import React from 'react';
import { Button } from '@/components/ui/Button';

interface HeroSectionProps {
  businessName: string;
  description: string;
  imageUrl: string;
}

export const HeroSection = ({ businessName, description, imageUrl }: HeroSectionProps) => {
  return (
    <section 
      className="relative bg-cover bg-center h-96 text-white"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-5xl font-bold">{businessName}</h1>
        <p className="text-xl mt-4">{description}</p>
        <Button className="mt-8">Learn More</Button>
      </div>
    </section>
  );
};
