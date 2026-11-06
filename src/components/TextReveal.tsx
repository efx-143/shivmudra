"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function TextReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!textRef.current) return;
    const words = textRef.current.querySelectorAll(".word");

    gsap.to(words, {
      color: "#18110a",
      stagger: 0.1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 65%",
        end: "bottom 80%",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const quote =
    "गडकिल्ले संवर्धन हे केवळ इतिहासाचे स्मरण नसून छत्रपती शिवाजी महाराजांच्या विचारांचे व संस्कृतीचे जतन करण्याचे पवित्र कर्तव्य आहे. शिवमुद्रा फाउंडेशनच्या माध्यमातून आम्ही गडकोटांची स्वच्छता, नित्यपूजा, शालेय साहित्य वाटप आणि सामाजिक बांधिलकी अखंडपणे जपत आहोत.";

  return (
    <section
      ref={containerRef}
      className="py-24 md:py-[150px] bg-gradient-to-b from-white via-[#fcf9f5] to-white flex justify-center items-center min-h-[70vh] border-b border-stone-200"
    >
      <div className="max-w-[1200px] px-6 md:px-10 text-center">
        <span className="inline-block text-xs md:text-sm font-bold uppercase text-[#c25e1a] mb-6 font-mukta">
          आमचा ध्यास • गडकिल्ले व समाजसेवा
        </span>
        <h2
          ref={textRef}
          className="text-[clamp(1.8rem,4vw,3.4rem)] font-normal leading-[1.4] font-royal"
        >
          {quote.split(" ").map((word, i) => (
            <span
              key={i}
              className="word inline-block mr-2 md:mr-3.5 text-stone-300 transition-colors"
            >
              {word}
            </span>
          ))}
        </h2>
        <div className="mt-10 flex items-center justify-center gap-3">
          <div className="h-[2px] w-12 bg-[#c25e1a]"></div>
          <span className="text-base md:text-lg font-bold text-stone-700 font-mukta">
            शिवमुद्रा फाउंडेशन महाराष्ट्र राज्य
          </span>
          <div className="h-[2px] w-12 bg-[#c25e1a]"></div>
        </div>
      </div>
    </section>
  );
}
