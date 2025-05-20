'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = ['about', 'projects', 'experiences', 'contact'];

export default function Header() {
  const [active, setActive] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [selectorStyle, setSelectorStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const currentRef = navRefs.current[active];
    if (currentRef) {
      const rect = currentRef.getBoundingClientRect();
      const navContainer = currentRef.parentElement?.getBoundingClientRect();
      if (navContainer) {
        const left = rect.left - navContainer.left;
        const width = rect.width;
        setSelectorStyle({ left, width });
      }
    }
  }, [active]);

  return (
    <header className="absolute top-[30px] left-[72px] right-[72px] flex items-center justify-between z-50">
      {/* Name */}
      <h1 className="font-poppins font-semibold text-[24px] leading-[36px] tracking-[-0.05em] text-[#03045E]">
        Yuliya Buturlia
      </h1>

      {/* Desktop Navigation */}
      <nav className="relative hidden md:flex items-center gap-[50px] font-poppins font-semibold text-[18px] leading-[27px] text-black">
        <div
          className="absolute bg-[#83BCFF]/40 h-[12px] transition-all duration-300 -z-10"
          style={{
            left: `${selectorStyle.left}px`,
            width: `${selectorStyle.width}px`,
            top: 'calc(100% - 12px)',
          }}
        />
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            ref={(el) => {
              navRefs.current[item] = el;
            }}
            onClick={() => setActive(item)}
            className="cursor-pointer"
          >
            {item === 'fun' ? 'for fun!' : item}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          className="text-[#03045E]"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-[60px] right-[0] bg-[#FCFCF1] border border-[#03045E] rounded-md shadow-lg p-4 flex flex-col gap-4 md:hidden font-poppins font-semibold text-[18px]">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => {
                setActive(item);
                setMobileMenuOpen(false);
              }}
              className="text-[#03045E]"
            >
              {item === 'fun' ? 'for fun!' : item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
