import React from 'react';
import { Hero } from '../components/sections/Hero';
import { Programs } from '../components/sections/Programs';
import { Pricing } from '../components/sections/Pricing';
import { FAQ } from '../components/sections/FAQ';

export function Home() {
  return (
    <>
      <Hero />
      <Programs />
      <Pricing />
      <FAQ />
    </>
  );
}
