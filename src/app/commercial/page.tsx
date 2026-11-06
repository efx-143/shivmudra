"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CommercialPage() {
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
          Elevate Your Business
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto"
        >
          Discover premium office spaces, retail locations, and commercial properties designed for scale and success.
        </motion.p>
      </section>

      {/* Offerings Grid */}
      <section className="py-24 px-6 md:px-10 max-w-[1400px] mx-auto bg-[#f8f8f8] rounded-3xl my-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Premium Office Spaces",
              desc: "High-rise, modern corporate environments with state-of-the-art facilities.",
              icon: "🏢"
            },
            {
              title: "Retail Fronts",
              desc: "High foot-traffic locations for brands looking to make a lasting impression.",
              icon: "🏪"
            },
            {
              title: "Industrial Hubs",
              desc: "Logistics, warehousing, and operational solutions built for efficiency.",
              icon: "🏭"
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-10 rounded-2xl shadow-sm border border-black/5"
            >
              <div className="text-4xl mb-6">{item.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-[#111]">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Advantage */}
      <section className="py-24 px-6 md:px-10 max-w-[1400px] mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-medium mb-8">The Emperia Advantage</h2>
        <div className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed mb-12">
          We understand that in business, location and infrastructure are everything. Our commercial portfolio is strategically curated to provide businesses with sustainable design, smart building technology, and the prestige they deserve.
        </div>
        <button className="bg-[#111] hover:bg-[#333] text-white px-8 py-4 rounded-full text-lg font-medium transition-colors">
          Contact Commercial Sales
        </button>
      </section>
    </div>
  );
}
