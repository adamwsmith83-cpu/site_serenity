import React from 'react';
import { Hero } from '../components/sections/Hero';
import { Programs } from '../components/sections/Programs';
import { Pricing } from '../components/sections/Pricing';
import { FAQ } from '../components/sections/FAQ';

export function Home() {
  return (
    <main className="flex flex-col space-y-64 py-32">
      <Hero />
      <Programs />
      <Pricing />
      <FAQ />
    </main>
  );
}
