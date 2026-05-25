"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-brand-ink py-20">
      {/* Halftone grid background */}
      <div className="absolute inset-0 bg-halftone-black opacity-15 pointer-events-none" />

      {/* Blue & Pink graphic layout glow background */}
      <div className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255, 24, 140, 0.15) 0%, transparent 70%)' }} />
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255, 154, 0, 0.12) 0%, transparent 70%)' }} />

      {/* Large outline watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[20vw] font-display font-black leading-none tracking-tighter uppercase whitespace-nowrap text-outline-cloud opacity-5">
          STORY
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 flex justify-center md:justify-end w-full">
        <div className="space-y-6 sm:space-y-8 max-w-xl w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border-comic bg-brand-cloud text-brand-ink p-5 sm:p-8 rounded-xl shadow-comic bg-halftone-black rotate-0 sm:rotate-1 mx-2 sm:mx-0"
          >
            <div className="inline-block text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] px-2 sm:px-3 py-1 sm:py-1.5 mb-4 sm:mb-6 border-comic bg-brand-orange text-brand-ink rotate-0 sm:rotate-[-2deg] shadow-comic-sm">
              JK LAKSHMIPAT UNIVERSITY
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-black leading-none uppercase tracking-tight text-brand-ink mb-3 sm:mb-4">
              ABOUT <span className="text-brand-pink">AARAMBH</span>
            </h1>

            <div className="my-4 sm:my-6 border-comic bg-brand-ink p-3 sm:p-4 rounded-lg flex items-center justify-center">
              <img src="/logo_cloud_white.svg" alt="Aarambh '26 Logo" className="h-12 sm:h-16 md:h-20 w-auto object-contain" />
            </div>

            <p className="text-brand-ink/80 font-bold text-xs sm:text-sm md:text-base leading-relaxed mb-5 sm:mb-6 uppercase">
              “THE ULTIMATE INDUCTION EXPERIENCE TO KICKSTART YOUR COLLEGE VOYAGE! MEET THE CREATIVE COMMUNITY AND SHAPE THE FUTURE!”
            </p>

            <div className="flex gap-4 flex-wrap">
              <a 
                href="#what-is-aarambh" 
                className="comic-interactive group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 w-full sm:w-auto border-comic bg-brand-pink text-brand-cloud font-display font-black uppercase tracking-wider text-xs shadow-comic-sm rounded-lg"
              >
                DISCOVER PANELS
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
