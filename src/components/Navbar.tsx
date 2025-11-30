"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useHoverIntent } from "@/hooks/useHoverIntent";

interface DropdownMenuProps {
  title: string;
  items: { label: string; href: string }[];
}

interface MobileMenuProps {
  title: string;
  items: { label: string; href: string }[];
  onItemClick?: () => void;
}

function MobileMenu({ title, items, onItemClick }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-4 text-white hover:bg-white/5 transition-colors"
      >
        <span className="font-medium">{title}</span>
        <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="bg-[#14273C]/50">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onItemClick}
              className="block px-8 py-3 text-white/80 hover:text-[#FFA36C] hover:bg-white/5 transition-colors text-sm"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function DropdownMenu({ title, items }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const { isHovered, onMouseEnter, onMouseLeave } = useHoverIntent();
  const menuRef = useRef<HTMLDivElement>(null);

  const shouldShowMenu = isHovered || hasFocus;

  useEffect(() => {
    if (shouldShowMenu) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [shouldShowMenu]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        setHasFocus(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setHasFocus(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button className="text-white/90 hover:text-[#E4C58B] transition-colors font-medium text-[15px]">
        {title}
      </button>
      {isOpen && (
        <div
          className="absolute top-full left-0 mt-3 w-56 bg-[#14273C]/95 backdrop-blur-md shadow-2xl rounded-xl overflow-hidden border border-[#E4C58B]/20"
          onFocus={() => setHasFocus(true)}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node)) {
              setHasFocus(false);
            }
          }}
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-5 py-3 text-sm text-white/80 hover:text-[#FFA36C] hover:bg-[#E4C58B]/10 transition-all duration-200 focus:outline-none focus:bg-[#E4C58B]/10 border-b border-white/5 last:border-b-0"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 모바일 메뉴가 열릴 때 스크롤 방지
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#15273D]/98 backdrop-blur-md border-b border-[#E4C58B]/20 shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link
              href="/"
              className="text-3xl font-bold text-[#E4C58B] hover:text-[#FFA36C] transition-colors"
              style={{ fontFamily: 'serif' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              S.R&P
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <DropdownMenu
                title="회사소개"
                items={[
                  { label: "회사소개", href: "/about" },
                  { label: "회사이념", href: "/about/vision" },
                  { label: "브랜드로고", href: "/about/brand" },
                  { label: "대표소개", href: "/about/ceo" },
                ]}
              />
              <DropdownMenu
                title="서비스"
                items={[
                  { label: "ARSS 소개", href: "/arss" },
                  { label: "Client 1~4 & Server/Bridge", href: "/arss/system" },
                  { label: "C4BR/BU 레일 시스템", href: "/arss/br-tr" },
                ]}
              />
              <DropdownMenu
                title="시스템"
                items={[
                  { label: "전체 시스템 개요", href: "/arss/system" },
                  { label: "C4BR/BU 소개", href: "/arss/br-tr" },
                ]}
              />
              <DropdownMenu
                title="요금제"
                items={[
                  { label: "Standard", href: "/arss/system#pricing-standard" },
                  { label: "Deluxe", href: "/arss/system#pricing-deluxe" },
                  { label: "Luxury", href: "/arss/system#pricing-luxury" },
                  { label: "Noblesse", href: "/arss/system#pricing-noblesse" },
                ]}
              />
              <Link
                href="/contact"
                className="px-6 py-2.5 bg-gradient-to-r from-[#E4C58B] to-[#FFA36C] text-[#15273D] font-bold rounded-full hover:shadow-lg hover:shadow-[#FFA36C]/50 transition-all duration-300"
              >
                문의/견적
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="메뉴"
            >
              <span
                className={`w-6 h-0.5 bg-[#E4C58B] transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-[#E4C58B] transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-[#E4C58B] transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Drawer */}
        <div
          className={`absolute top-20 right-0 bottom-0 w-80 max-w-[85vw] bg-[#15273D] border-l border-[#E4C58B]/20 shadow-2xl overflow-y-auto transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="py-4">
            <MobileMenu
              title="회사소개"
              items={[
                { label: "회사소개", href: "/about" },
                { label: "회사이념", href: "/about/vision" },
                { label: "브랜드로고", href: "/about/brand" },
                { label: "대표소개", href: "/about/ceo" },
              ]}
              onItemClick={() => setIsMobileMenuOpen(false)}
            />
            <MobileMenu
              title="서비스"
              items={[
                { label: "ARSS 소개", href: "/arss" },
                { label: "Client 1~4 & Server/Bridge", href: "/arss/system" },
                { label: "C4BR/BU 레일 시스템", href: "/arss/br-tr" },
              ]}
              onItemClick={() => setIsMobileMenuOpen(false)}
            />
            <MobileMenu
              title="시스템"
              items={[
                { label: "전체 시스템 개요", href: "/arss/system" },
                { label: "C4BR/BU 소개", href: "/arss/br-tr" },
              ]}
              onItemClick={() => setIsMobileMenuOpen(false)}
            />
            <MobileMenu
              title="요금제"
              items={[
                { label: "Standard", href: "/arss/system#pricing-standard" },
                { label: "Deluxe", href: "/arss/system#pricing-deluxe" },
                { label: "Luxury", href: "/arss/system#pricing-luxury" },
                { label: "Noblesse", href: "/arss/system#pricing-noblesse" },
              ]}
              onItemClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile CTA Button */}
            <div className="px-6 py-6">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full px-6 py-4 bg-gradient-to-r from-[#E4C58B] to-[#FFA36C] text-[#15273D] text-center rounded-full hover:shadow-lg hover:shadow-[#FFA36C]/50 transition-all duration-300 font-bold text-lg"
              >
                문의/견적
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

