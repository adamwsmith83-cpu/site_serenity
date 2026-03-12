import React from 'react';

export function Footer() {
  return (
    <footer className="relative z-10 py-20 px-6 bg-transparent text-linen-cream text-center">
      <div className="text-2xl font-playfair font-bold mb-8 uppercase tracking-widest">SERENITY LENDING</div>
      <div className="h-px w-12 bg-terracotta mx-auto mb-8" />
      <div className="text-xs uppercase tracking-[0.3em] opacity-40">
        © 2024 serenitylending.org | NMLS #1234567
      </div>
    </footer>
  );
}
