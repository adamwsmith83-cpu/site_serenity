import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavLink {
  name: string;
  href: string;
}

interface NavigationProps {
  navLinks: NavLink[];
}

export function Navigation({ navLinks }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="fixed top-0 w-full bg-black/80 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <Link to="/" className="text-2xl font-playfair font-bold tracking-tight text-linen-cream flex items-center gap-3">
          <img 
            src="/assets/serenity_icon.svg" 
            alt="Serenity Icon" 
            className="w-8 h-8 rounded-lg object-cover"
            referrerPolicy="no-referrer"
          />
          Serenity Lending
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-linen-cream/60">
          {navLinks.map((link) => (
            isHome ? (
              <a key={link.name} href={link.href} className="hover:text-terracotta transition-colors">
                {link.name}
              </a>
            ) : (
              <Link key={link.name} to={`/${link.href}`} className="hover:text-terracotta transition-colors">
                {link.name}
              </Link>
            )
          ))}
          <div className="flex items-center gap-4 ml-6">
            <Link to="/funding" className="bg-sage-forest text-linen-cream px-6 py-3 hover:bg-white/10 transition-all duration-500 font-dm-sans normal-case tracking-normal font-medium">
              Fund Your Next Deal
            </Link>
          </div>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-linen-cream">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/95 border-b border-white/10 p-8 flex flex-col gap-6 text-sm font-bold uppercase tracking-widest text-linen-cream">
          {navLinks.map((link) => (
            isHome ? (
              <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </a>
            ) : (
              <Link key={link.name} to={`/${link.href}`} onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </Link>
            )
          ))}
          <Link to="/funding" onClick={() => setIsMenuOpen(false)} className="bg-sage-forest text-linen-cream py-4 text-center normal-case tracking-normal font-medium">
            Fund Your Next Deal
          </Link>
        </div>
      )}
    </nav>
  );
}
