"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useHoverIntent } from "@/hooks/useHoverIntent";

interface DropdownMenuProps {
  title: string;
  items: { label: string; href: string }[];
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
      <button className="text-black dark:text-white hover:text-[var(--accent,#3fb1d3)] transition-colors">
        {title}
      </button>
      {isOpen && (
        <div
          className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-zinc-900 shadow-lg rounded-lg overflow-hidden"
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
              className="block px-4 py-3 text-sm text-black dark:text-white hover:bg-[var(--accent,#3fb1d3)]/10 transition-colors focus:outline-none focus:bg-[var(--accent,#3fb1d3)]/10"
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
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-black/10 dark:border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-2xl font-bold text-black dark:text-white"
          >
            S.R&P
          </Link>
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
              title="ARSS 서비스란?"
              items={[
                { label: "ARSS 서비스란?", href: "/arss" },
                { label: "Automated Rail Serving System", href: "/arss/system" },
                { label: "BR-TR", href: "/arss/br-tr" },
              ]}
            />
            <Link
              href="/contact"
              className="px-6 py-2 bg-[var(--accent,#3fb1d3)] text-white rounded-full hover:bg-[#2f9bb3] transition-colors"
            >
              무료상담
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

