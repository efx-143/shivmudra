"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ResidentialPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-10 max-w-[1400px] mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[clamp(2.5rem,5vw,5rem)] leading-tight font-medium text-[#111] mb-6"
        >
          More Than Just a Home
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto"
        >
          Find your sanctuary. Explore our exclusive collection of luxury apartments, expansive villas, and breathtaking penthouses.
        </motion.p>
      </section>

      {/* Lifestyle Features */}
      <section className="py-24 px-6 md:px-10 max-w-[1400px] mx-auto bg-black text-white rounded-3xl my-10 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-medium mb-12">The Emperia Lifestyle</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "24/7 Security", value: "🛡️" },
              { label: "Lush Green Spaces", value: "🌳" },
              { label: "Elite Clubhouses", value: "🍸" },
              { label: "Smart Home Ready", value: "📱" }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="text-4xl mb-4">{feature.value}</div>
                <div className="font-medium text-gray-300">{feature.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 px-6 md:px-10 max-w-[1400px] mx-auto">
        <h2 className="text-3xl md:text-5xl font-medium text-center mb-16">Explore Our Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Luxury Apartments", desc: "City-center living with panoramic views and premium amenities." },
            { title: "Exclusive Villas", desc: "Private, spacious estates designed for ultimate comfort and family living." },
            { title: "Penthouses", desc: "The pinnacle of luxury living, featuring expansive terraces and skyline views." }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#f8f8f8] p-10 rounded-2xl border border-black/5 hover:border-black/20 transition-colors"
            >
              <h3 className="text-2xl font-semibold mb-4 text-[#111]">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-8">{item.desc}</p>
              <button className="text-black font-medium border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors">
                View Properties
              </button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
