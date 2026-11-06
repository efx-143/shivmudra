"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CareerPage() {
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
          Shape the Future of Real Estate
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto"
        >
          We are always looking for driven, passionate professionals to join our team of industry leaders.
        </motion.p>
      </section>

      {/* Culture */}
      <section className="py-24 px-6 md:px-10 max-w-[1400px] mx-auto bg-[#111] text-white rounded-3xl my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-medium mb-6">Our Culture</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              At Emperia, we believe that our greatest asset is our people. We foster an environment of innovation, integrity, and relentless pursuit of excellence. 
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Whether you are closing deals, designing spaces, or leading marketing campaigns, your work here makes a tangible impact on the world around us.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              "Competitive Salary",
              "Health & Wellness",
              "Career Growth",
              "Flexible Working"
            ].map((perk, i) => (
              <div key={i} className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10 text-center">
                <div className="font-medium">{perk}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 px-6 md:px-10 max-w-[800px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium text-center mb-16">Open Positions</h2>
        <div className="space-y-6">
          {[
            { role: "Senior Real Estate Consultant", type: "Full-time", loc: "Mumbai" },
            { role: "Lead Architect", type: "Full-time", loc: "Mumbai" },
            { role: "Marketing Manager", type: "Hybrid", loc: "Remote/Mumbai" }
          ].map((job, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col md:flex-row justify-between items-start md:items-center p-8 bg-[#f8f8f8] rounded-2xl hover:shadow-md transition-shadow"
            >
              <div>
                <h3 className="text-xl font-bold text-[#111] mb-2">{job.role}</h3>
                <div className="text-gray-500 text-sm flex gap-4">
                  <span>{job.type}</span>
                  <span>•</span>
                  <span>{job.loc}</span>
                </div>
              </div>
              <button className="mt-4 md:mt-0 px-6 py-2 border border-black rounded-full font-medium hover:bg-black hover:text-white transition-colors">
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
