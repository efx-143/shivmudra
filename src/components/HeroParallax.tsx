"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HeroParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  const skyRef = useRef<HTMLImageElement>(null);
  const introTextRef = useRef<HTMLDivElement>(null);
  const buildingRef = useRef<HTMLImageElement>(null);

  const outlineLayerRef = useRef<HTMLDivElement>(null);
  const swashOutlineRef = useRef<SVGPathElement>(null);
  const emperiaOutlineRef = useRef<SVGTextElement>(null);
  const realEstateOutlineRef = useRef<SVGTextElement>(null);

  const maskLayerRef = useRef<HTMLDivElement>(null);
  const maskTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Mobile / Tablet Animation (< 768px)
      mm.add("(max-width: 767px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=180%",
            scrub: 0.8,
            pin: true,
          },
        });

        // 1. Sky gentle parallax
        tl.to(skyRef.current, { yPercent: -10, duration: 1, ease: "none" }, 0);

        // 2. Intro text fades out and moves up
        tl.to(
          introTextRef.current,
          { yPercent: -18, opacity: 0, duration: 0.25, ease: "power1.out" },
          0
        );

        // 3. Rajmudra moves up from bottom and STAYS visible in frame (doesn't fly off screen)
        tl.to(
          buildingRef.current,
          { yPercent: -28, scale: 1.08, duration: 0.7, ease: "power1.out" },
          0
        );

        // 4. White Glowing Outline text draws itself over the Rajmudra
        tl.to(
          swashOutlineRef.current,
          { strokeDashoffset: 0, duration: 0.25, ease: "power1.inOut" },
          0.12
        );
        tl.to(
          emperiaOutlineRef.current,
          { strokeDashoffset: 0, duration: 0.28, ease: "power1.inOut" },
          0.15
        );
        tl.to(
          realEstateOutlineRef.current,
          { strokeDashoffset: 0, duration: 0.28, ease: "power1.inOut" },
          0.20
        );

        // 5. Outline and Rajmudra stay visible until the end, then smoothly wipe into next section
        tl.to(
          outlineLayerRef.current,
          { opacity: 0, duration: 0.15, ease: "power1.in" },
          0.8
        );
        tl.to(
          buildingRef.current,
          { opacity: 0, duration: 0.15, ease: "power1.in" },
          0.8
        );
        tl.to(
          maskLayerRef.current,
          { opacity: 1, duration: 0.15, ease: "none" },
          0.85
        );
      });

      // Desktop Animation (>= 768px)
      mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=220%",
            scrub: 1,
            pin: true,
          },
        });

        tl.to(skyRef.current, { yPercent: -15, duration: 1, ease: "none" }, 0);
        tl.to(
          introTextRef.current,
          { yPercent: -20, opacity: 0, duration: 0.2, ease: "power1.out" },
          0
        );

        tl.to(
          buildingRef.current,
          { yPercent: -62, scale: 1.15, duration: 0.8, ease: "none" },
          0
        );

        tl.to(
          swashOutlineRef.current,
          { strokeDashoffset: 0, duration: 0.25, ease: "power1.inOut" },
          0.12
        );
        tl.to(
          emperiaOutlineRef.current,
          { strokeDashoffset: 0, duration: 0.25, ease: "power1.inOut" },
          0.15
        );
        tl.to(
          realEstateOutlineRef.current,
          { strokeDashoffset: 0, duration: 0.25, ease: "power1.inOut" },
          0.20
        );

        tl.to(
          outlineLayerRef.current,
          { opacity: 0, duration: 0.15, ease: "none" },
          0.7
        );
        tl.fromTo(
          maskLayerRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.15, ease: "none" },
          0.75
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-[#e5eef5]"
    >
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Layer 1: Sky Background */}
        <div className="absolute top-0 left-0 w-full h-[120%] flex justify-center items-end z-0 pointer-events-none">
          <img
            ref={skyRef}
            src="/sky.png"
            alt="सह्याद्रीचे आकाश"
            className="w-full h-full object-cover object-bottom"
          />
        </div>

        {/* Layer 2: Intro Content (Behind the Rajmudra) */}
        <div
          ref={introTextRef}
          className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center text-center z-10 pt-[82px] sm:pt-[110px] md:pt-[14vh] px-4"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/5 backdrop-blur-md border border-black/10 text-[#8b3507] text-[10px] sm:text-xs md:text-sm font-semibold mb-2 uppercase shadow-sm">
            <span>🚩</span> गडकिल्ले संवर्धन व सेवा • पुणे/००००२३५०/२०२५
          </div>

          {/* Calligraphic Headline Container */}
          <div className="text-center mb-3 sm:mb-4 max-w-4xl relative">
            <div className="relative inline-block">
              {/* Calligraphic Top Swash Flourish */}
              <svg
                viewBox="0 0 120 45"
                className="absolute -top-5 -left-6 sm:-top-7 sm:-left-10 md:-top-9 md:-left-14 w-12 sm:w-16 md:w-24 h-auto text-[#c25e1a] drop-shadow-sm pointer-events-none"
                fill="none"
              >
                <path
                  d="M 5 40 C 5 12, 50 2, 95 24 C 110 32, 118 18, 112 5"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>

              <h1 className="text-[clamp(2.4rem,7vw,6.2rem)] font-normal text-[#1a120b] drop-shadow-sm font-royal leading-none">
                शिवमुद्रा
              </h1>

              {/* Bottom Curved Underline Swash */}
              <svg
                viewBox="0 0 320 28"
                className="w-full max-w-[200px] sm:max-w-[280px] md:max-w-[340px] mx-auto h-2.5 sm:h-4 md:h-5 text-[#c25e1a] -mt-0.5 md:-mt-1"
              >
                <path
                  d="M 15 6 Q 160 26 305 6 Q 235 28 85 18 Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            {/* Subtitle - Mukta Bold (no broken conjuncts) */}
            <p className="text-[clamp(1.05rem,2.8vw,2.2rem)] font-bold text-[#8b3507] font-mukta mt-0.5 sm:mt-1 leading-tight">
              फाउंडेशन महाराष्ट्र राज्य
            </p>

            <p className="hidden sm:block text-xs sm:text-sm md:text-base font-semibold text-stone-700 max-w-2xl mx-auto font-mukta mt-2 px-2">
              छत्रपती शिवाजी महाराजांच्या पावन गडकिल्ल्यांचे संवर्धन, नित्यपूजा व सामाजिक सेवा
            </p>
          </div>

          {/* Action Buttons - Compact side-by-side on mobile, elegant on desktop */}
          <div className="flex flex-row justify-center items-center gap-2.5 sm:gap-4 pointer-events-auto">
            <a
              href="#initiatives"
              className="bg-gradient-to-r from-[#d9531e] to-[#b83807] hover:from-[#e5622c] hover:to-[#cb420f] text-white px-4 sm:px-7 py-2 sm:py-3.5 rounded-full text-xs sm:text-base font-bold transition-all shadow-lg hover:shadow-orange-950/30 flex items-center justify-center gap-1.5 hover:scale-[1.02] active:scale-[0.98] font-mukta"
            >
              आमचे ५ मुख्य कार्ये <span>&rarr;</span>
            </a>
            <a
              href="#forts"
              className="bg-white/90 hover:bg-white text-[#1a120b] border border-stone-300 px-3.5 sm:px-7 py-2 sm:py-3.5 rounded-full text-xs sm:text-base font-bold transition-all shadow-md hover:scale-[1.02] active:scale-[0.98] font-mukta text-center"
            >
              किल्ले दर्शन
            </a>
          </div>
        </div>

        {/* Layer 3: The Rajmudra (Sacred Royal Seal) */}
        <div className="absolute bottom-0 left-0 w-full flex justify-center items-end z-20 pointer-events-none">
          <img
            ref={buildingRef}
            src="/building.png"
            alt="श्री शिवछत्रपतींची राजमुद्रा"
            className="w-[280px] sm:w-[380px] md:w-[560px] lg:w-[650px] max-w-[85vw] h-auto object-contain transform translate-y-[8%] sm:translate-y-[15%] md:translate-y-[55%] drop-shadow-[0_25px_60px_rgba(0,0,0,0.5)]"
          />
        </div>

        {/* Layer 3.5: Outline Layer (White Outline with Luminous Royal Glow) */}
        <div
          ref={outlineLayerRef}
          className="absolute top-0 left-0 w-full h-screen flex flex-col justify-start pt-[19vh] sm:pt-[21vh] md:justify-center md:pt-0 items-center z-25 pointer-events-none"
        >
          <div className="w-full max-w-[1400px] px-4 text-center">
            <svg
              viewBox="0 0 1000 320"
              className="w-full max-w-[340px] sm:max-w-[650px] md:max-w-[1000px] mx-auto h-auto overflow-visible"
            >
              <defs>
                {/* Divine White & Amber Glow Filter */}
                <filter id="whiteGlow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="5" result="blur1" />
                  <feGaussianBlur stdDeviation="14" result="blur2" />
                  <feMerge>
                    <feMergeNode in="blur2" />
                    <feMergeNode in="blur1" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Calligraphic Top Swash Outline - Pure White with Glow */}
              <path
                ref={swashOutlineRef}
                d="M 230 65 C 190 20, 240 10, 310 50"
                className="fill-none stroke-white"
                filter="url(#whiteGlow)"
                style={{
                  strokeWidth: "3.5px",
                  strokeLinecap: "round",
                  strokeDasharray: "500",
                  strokeDashoffset: "500",
                }}
              />

              {/* Main Calligraphic Text "शिवमुद्रा" - Pure White Stroke with Glow */}
              <text
                ref={emperiaOutlineRef}
                x="50%"
                y="165"
                textAnchor="middle"
                className="fill-transparent stroke-white"
                filter="url(#whiteGlow)"
                style={{
                  fontSize: "145px",
                  fontWeight: 400,
                  fontFamily: "'Rozha One', 'Mukta', serif",
                  strokeWidth: "2.8px",
                  strokeDasharray: "4000",
                  strokeDashoffset: "4000",
                }}
              >
                शिवमुद्रा
              </text>

              {/* Subtitle - Pure White with Mukta font for perfect conjuncts */}
              <text
                ref={realEstateOutlineRef}
                x="50%"
                y="265"
                textAnchor="middle"
                className="fill-transparent stroke-white"
                filter="url(#whiteGlow)"
                style={{
                  fontSize: "44px",
                  fontWeight: 700,
                  fontFamily: "'Mukta', sans-serif",
                  strokeWidth: "1.8px",
                  strokeDasharray: "2500",
                  strokeDashoffset: "2500",
                }}
              >
                फाउंडेशन महाराष्ट्र राज्य
              </text>
            </svg>
          </div>
        </div>

        {/* Layer 4: Mask Layer (Smooth wipe into next section) */}
        <div
          ref={maskLayerRef}
          className="absolute top-0 left-0 w-full h-screen bg-white z-30 pointer-events-none overflow-hidden opacity-0"
          style={{ mixBlendMode: "screen" }}
        >
          <div
            ref={maskTextRef}
            className="w-full h-screen flex flex-col justify-start pt-[19vh] sm:pt-[21vh] md:justify-center md:pt-0 items-center"
          >
            <div className="w-full max-w-[1400px] px-4 text-center">
              <svg
                viewBox="0 0 1000 320"
                className="w-full max-w-[340px] sm:max-w-[650px] md:max-w-[1000px] mx-auto h-auto overflow-visible"
              >
                {/* Top Swash in Mask */}
                <path
                  d="M 230 65 C 190 20, 240 10, 310 50"
                  className="fill-none stroke-black"
                  style={{
                    strokeWidth: "3.5px",
                    strokeLinecap: "round",
                  }}
                />

                {/* Text in Mask */}
                <text
                  x="50%"
                  y="165"
                  textAnchor="middle"
                  className="fill-black stroke-black"
                  style={{
                    fontSize: "145px",
                    fontWeight: 400,
                    fontFamily: "'Rozha One', 'Mukta', serif",
                    strokeWidth: "2.8px",
                  }}
                >
                  शिवमुद्रा
                </text>

                <text
                  x="50%"
                  y="265"
                  textAnchor="middle"
                  className="fill-black stroke-black"
                  style={{
                    fontSize: "44px",
                    fontWeight: 700,
                    fontFamily: "'Mukta', sans-serif",
                    strokeWidth: "1.8px",
                  }}
                >
                  फाउंडेशन महाराष्ट्र राज्य
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* Layer 5: Cloud Divider */}
        <div className="absolute bottom-0 left-0 w-full h-[40vh] z-40 pointer-events-none overflow-visible flex items-end transform translate-y-0 md:translate-y-[25vh]">
          <img
            src="/cloud.png"
            alt="Cloud Divider"
            className="absolute bottom-[-10%] md:bottom-[-20%] left-[-50%] md:left-[-10%] min-w-[700px] md:min-w-0 md:w-[70%] max-w-none opacity-100"
          />
          <img
            src="/cloud.png"
            alt="Cloud Divider"
            className="absolute bottom-[-15%] md:bottom-[-25%] right-[-50%] md:right-[-15%] min-w-[800px] md:min-w-0 md:w-[80%] max-w-none opacity-100"
          />
          <img
            src="/cloud.png"
            alt="Cloud Divider"
            className="absolute bottom-[-20%] md:bottom-[-40%] left-[-20%] md:left-[5%] min-w-[900px] md:min-w-0 md:w-[100%] max-w-none opacity-90"
          />
        </div>
      </div>
    </section>
  );
}
