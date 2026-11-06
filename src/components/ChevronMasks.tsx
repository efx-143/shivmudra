"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ChevronMasks() {
  const items = [
    {
      img: "/hero_cover.jpg",
      title: "छत्रपती शिवराय",
      subtitle: "आमचे आराध्य दैवत",
    },
    {
      img: "/forts/torna_deepotsav.jpg",
      title: "किल्ले तोरणा",
      subtitle: "दीपोत्सव व पूजा",
    },
    {
      img: "/forts/rajgad_balekilla.jpg",
      title: "किल्ले राजगड",
      subtitle: "राजधानी संवर्धन",
    },
    {
      img: "/initiatives/lathi_kathi.jpg",
      title: "मर्दानी खेळ",
      subtitle: "लाठी-काठी प्रशिक्षण",
    },
  ];

  const getClipPath = (index: number, length: number) => {
    if (index === 0) {
      return "polygon(0% 0%, 78% 0%, 100% 50%, 78% 100%, 0% 100%)";
    }
    if (index === length - 1) {
      return "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 22% 50%)";
    }
    return "polygon(0% 0%, 78% 0%, 100% 50%, 78% 100%, 0% 100%, 22% 50%)";
  };

  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-10 max-w-[1400px] mx-auto bg-white text-center flex flex-col items-center overflow-hidden font-mukta">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#b8480d] text-xs font-bold uppercase mb-4">
        <span>🚩</span> गडकोट संवर्धन दर्शन
      </div>

      <h2 className="text-[clamp(1.7rem,3.8vw,3.2rem)] font-normal text-[#1a120b] leading-tight mb-3 font-royal">
        हे केवळ दुर्गभ्रमण नाही, <span className="text-stone-400">ही स्वराज्य निष्ठा आहे.</span>
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-stone-600 max-w-2xl mb-8 sm:mb-12">
        मावळ्यांच्या त्यागाने पावन झालेल्या गडकोटांचे जतन आणि भावी पिढीमध्ये स्वराज्य मूल्यांचे बीजारोपण
      </p>

      {/* Desktop Chevron layout */}
      <div className="hidden sm:flex gap-1.5 md:gap-3 justify-center items-center w-full max-w-[1250px] mb-8 h-[360px] md:h-[480px]">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px 0px" }}
            transition={{
              duration: 0.8,
              delay: i * 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              clipPath: getClipPath(i, items.length),
            }}
            className="relative flex-1 h-full overflow-hidden group cursor-pointer shadow-lg"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-4 md:p-6 text-left">
              <span className="text-[10px] md:text-xs text-amber-400 font-bold uppercase">
                {item.subtitle}
              </span>
              <h4 className="text-white text-base md:text-xl font-normal font-royal leading-tight mt-0.5">
                {item.title}
              </h4>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Grid layout (2x2) */}
      <div className="grid sm:hidden grid-cols-2 gap-3 w-full max-w-md mb-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="relative aspect-square rounded-2xl overflow-hidden shadow-md group"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-3 text-left">
              <span className="text-[10px] text-amber-400 font-bold">
                {item.subtitle}
              </span>
              <h4 className="text-white text-sm font-normal font-royal leading-tight mt-0.5">
                {item.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
