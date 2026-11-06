"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || isMobileMenuOpen
          ? "bg-[#140e0a]/95 backdrop-blur-md border-b border-amber-900/30 shadow-xl"
          : "bg-gradient-to-b from-black/75 via-black/35 to-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 h-18 sm:h-20 md:h-24 flex justify-between items-center">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3.5 group">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 rounded-full overflow-hidden border-2 border-amber-500/80 bg-black/40 flex items-center justify-center p-0.5 group-hover:scale-105 transition-transform shadow-md shrink-0">
            <img
              src="/logo.png"
              alt="शिवमुद्रा फाउंडेशन"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl md:text-2xl font-normal text-white group-hover:text-amber-400 transition-colors font-royal leading-none">
              शिवमुद्रा फाउंडेशन
            </span>
            <span className="text-[10px] sm:text-xs text-amber-200/90 font-semibold font-mukta mt-0.5">
              महाराष्ट्र राज्य • गडकिल्ले संवर्धन
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex gap-7 items-center text-sm font-bold text-stone-200 font-mukta">
          <Link href="#initiatives" className="hover:text-amber-400 transition-colors">
            ५ मुख्य कार्ये
          </Link>
          <Link href="#forts" className="hover:text-amber-400 transition-colors">
            गडकिल्ले संवर्धन
          </Link>
          <Link href="#president" className="hover:text-amber-400 transition-colors">
            अध्यक्षीय मनोगत
          </Link>
          <Link href="#gallery" className="hover:text-amber-400 transition-colors">
            छायाचित्रे
          </Link>
          <Link href="#awards" className="hover:text-amber-400 transition-colors">
            सन्मान व गौरव
          </Link>
          <Link href="#contact" className="hover:text-amber-400 transition-colors">
            संपर्क
          </Link>
        </div>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <a
            href="#contact"
            className="bg-gradient-to-r from-[#d9531e] to-[#b83807] hover:from-[#e5622c] hover:to-[#cb420f] text-white px-3.5 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all shadow-md hover:shadow-orange-900/50 flex items-center gap-1.5 font-mukta"
          >
            <span>🚩</span> सहभागी व्हा
          </a>

          <button
            className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span
              className={`block w-4 h-0.5 bg-white transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-4 h-0.5 bg-white transition-opacity duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-4 h-0.5 bg-white transition-transform duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-[#140e0a]/98 border-b border-amber-900/40 px-6 py-6 flex flex-col gap-4 text-stone-200 font-mukta"
          >
            <Link
              href="#initiatives"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-bold hover:text-amber-400 py-2 border-b border-white/10"
            >
              ५ मुख्य कार्ये
            </Link>
            <Link
              href="#forts"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-bold hover:text-amber-400 py-2 border-b border-white/10"
            >
              गडकिल्ले संवर्धन मोहीम
            </Link>
            <Link
              href="#president"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-bold hover:text-amber-400 py-2 border-b border-white/10"
            >
              अध्यक्षीय मनोगत
            </Link>
            <Link
              href="#gallery"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-bold hover:text-amber-400 py-2 border-b border-white/10"
            >
              मोहीम छायाचित्रे
            </Link>
            <Link
              href="#awards"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-bold hover:text-amber-400 py-2 border-b border-white/10"
            >
              सन्मान व गौरव
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-bold hover:text-amber-400 py-2"
            >
              संपर्क व सहभाग
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
