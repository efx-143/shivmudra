"use client";

import React from "react";
import { motion } from "framer-motion";

export default function VideoSection() {
  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-10 max-w-[1400px] mx-auto bg-white border-b border-stone-200 font-mukta">
      <div className="flex flex-col md:flex-row justify-between items-start mb-10 sm:mb-14 gap-6 sm:gap-8">
        <div className="shrink-0 md:w-1/4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#b8480d] text-xs font-bold uppercase mb-2">
            ध्येय व उद्दिष्ट
          </div>
          <h3 className="text-xl sm:text-2xl font-normal text-[#1a120b] font-royal">
            शिवमुद्रा फाउंडेशन का?
          </h3>
        </div>

        <div className="max-w-3xl">
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.3] font-normal text-[#1a120b] mb-3 font-royal">
            इतिहासाची साक्ष देणाऱ्या गडकोटांचे जतन,{" "}
            <span className="text-stone-400">
              आणि समाजातील वंचित घटकांच्या जीवनात ज्ञानाचा प्रकाश निर्माण करणे.
            </span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base md:text-lg leading-relaxed font-mukta">
            शिवमुद्रा फाउंडेशन महाराष्ट्र राज्य (नोंदणी क्र. पुणे/००००२३५०/२०२५) ही संस्था छत्रपती शिवाजी महाराजांच्या गडकिल्ल्यांवर जाऊन स्वच्छता, संवर्धन, मंदिर रंगकाम, पायऱ्या दुरुस्ती आणि नित्यपूजेचे कार्य अखंडपणे करत आहे.
          </p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px 0px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full aspect-[4/3] sm:aspect-video md:h-[600px] rounded-3xl overflow-hidden group shadow-2xl border border-stone-200/80"
      >
        {/* Background visual banner */}
        <img
          src="/hero_cover.jpg"
          alt="छत्रपती शिवाजी महाराज व सह्याद्रीचे गडकिल्ले"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20 flex flex-col justify-end p-5 sm:p-8 md:p-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#d9531e] text-white text-xs font-bold uppercase mb-3 shadow">
              🚩 प्रत्यक्ष कार्यभूमी
            </div>
            <h3 className="text-xl sm:text-2xl md:text-4xl font-normal text-white mb-2 sm:mb-3 font-royal leading-tight">
              "रक्त सांडले ज्या मातीत, ती माती आम्हाला प्राणाहून प्रिय आहे!"
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm md:text-base leading-relaxed mb-5 sm:mb-6 font-mukta">
              तोरणा, राजगड, सिंहगड, सुधागड, रोहिडा, सेगवागड, रायरेश्वर अशा अनेक दुर्गांवर हजारो तास श्रमदान करून मावळ्यांची स्मृती जागती ठेवण्याचा हा नम्र प्रयत्न.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#forts"
                className="w-full sm:w-auto text-center bg-white text-stone-900 hover:bg-amber-400 font-bold px-6 py-3 rounded-full text-sm md:text-base transition-colors flex items-center justify-center gap-2 shadow-lg font-mukta"
              >
                सर्व मोहीम पहा <span>&rarr;</span>
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto text-center bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold px-6 py-3 rounded-full text-sm md:text-base transition-colors font-mukta"
              >
                स्वयंसेवक म्हणून नोंदणी करा
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
