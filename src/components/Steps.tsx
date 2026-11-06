"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Steps() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Stacking card animation: as each card scrolls past, scale it down slightly
      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        // If not the last card, animate scale and brightness as subsequent cards stack over it
        if (index < cardRefs.current.length - 1) {
          gsap.to(card, {
            scale: 0.94 - index * 0.015,
            opacity: 0.85,
            transformOrigin: "top center",
            ease: "none",
            scrollTrigger: {
              trigger: cardRefs.current[index + 1],
              start: "top 75%",
              end: "top 25%",
              scrub: true,
            },
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const initiatives = [
    {
      num: "०१",
      title: "गडकिल्ले संवर्धन मोहीम",
      category: "Fort Conservation",
      tag: "श्रमदान व जीर्णोद्धार",
      desc: "छत्रपती शिवरायांच्या स्वराज्यातील गडकिल्ल्यांवर प्रत्यक्ष जाऊन स्वच्छता, महादरवाजा दुरुस्ती, पाण्याची प्राचीन टाकी स्वच्छ करणे, तटबंदी व मंदिरांचे संवर्धन करणे. तोरणा, राजगड, सेगवागड, रायरेश्वर, सुधागड, विसापूर, रोहिडा या किल्ल्यांवर सातत्यपूर्ण मोहिमा राबविल्या जातात.",
      img: "/forts/torna_1.jpg",
      points: [
        "महादरवाजा व तटबंदी परिसर स्वच्छता",
        "प्राचीन पिण्याच्या पाण्याचे टाके सफाई",
        "मंदिरांचे रंगकाम व पायऱ्यांची डागडुजी",
      ],
    },
    {
      num: "०२",
      title: "नित्य पूजा व दीपोत्सव",
      category: "Sacred Rituals",
      tag: "भक्ती व आदर",
      desc: "गडांवरील देवतांची व शिवरायांच्या स्मारकांची नित्यपूजा. धर्मवीर छत्रपती श्री संभाजी महाराज स्मारक (डेक्कन, पुणे) येथे दर शुक्रवारी नित्यपूजा, किल्ले तोरणा येथील मेंगाई देवी मंदिरामध्ये दीपोत्सव व महाशिवरात्री पूजा तसेच भिवंडी येथील छत्रपती शिवाजी महाराज मंदिरात महापूजा नियमित केली जाते.",
      img: "/initiatives/nitya_puja.jpg",
      points: [
        "संभाजी महाराज स्मारक (डेक्कन) दर शुक्रवारी नित्यपूजा",
        "किल्ले तोरणा मेंगाई देवी मंदिर दीपोत्सव व महाशिवरात्री",
        "गडकोटांवर सण व पवित्र उत्सवांचे आयोजन",
      ],
    },
    {
      num: "०३",
      title: "शालेय साहित्य वाटप",
      category: "Education Support",
      tag: "५००+ विद्यार्थ्यांना मदत",
      desc: "गरजू, होतकरू आणि अनाथ विद्यार्थ्यांना मोफत शालेय साहित्य वाटप करून त्यांच्या शिक्षणाला हातभार लावणे. स्वप्नवेध अनाथालय जुन्नर, आश्रमशाळा जावडे लंजा (रत्नागिरी), ज्ञानगंगोत्री मतिमंद शाळा तसेच पुणे, सातारा, सांगली, सोलापूर येथील १० हून अधिक शाळांमध्ये दरवर्षी साहित्य वाटप केले जाते.",
      img: "/initiatives/shikshan_watap_1.jpg",
      points: [
        "दरवर्षी ५००+ विद्यार्थ्यांना मोफत वह्या व दप्तर वाटप",
        "१०+ दुर्गम व ग्रामीण शाळांमध्ये प्रत्यक्ष मदत",
        "अनाथालये व मतिमंद निवासी शाळांना विशेष साहाय्य",
      ],
    },
    {
      num: "०४",
      title: "सामाजिक उपक्रम व मर्दानी खेळ",
      category: "Social Welfare",
      tag: "रक्तदान व लाठी-काठी शिबीर",
      desc: "शिवजयंती निमित्त भव्य रक्तदान शिबीरांचे आयोजन करून 'रक्तदान हेच सर्वश्रेष्ठ दान' हा संदेश समाजात पोहोचवणे. तसेच नरवीर तानाजी मालुसरे प्रतिष्ठान समवेत युवकांसाठी मोफत लाठी-काठी व पारंपारिक मर्दानी खेळ प्रशिक्षण शिबीर राबविले जाते.",
      img: "/initiatives/raktdan_1.jpg",
      points: [
        "शिवजयंती निमित्त भव्य रक्तदान शिबीरांचे आयोजन",
        "तरुणांसाठी मोफत लाठी-काठी व स्वसंरक्षण प्रशिक्षण",
        "पर्यावरण रक्षण व वृक्षारोपण मोहीम",
      ],
    },
    {
      num: "०५",
      title: "दुर्ग अभ्यास मोहीम",
      category: "Heritage Research",
      tag: "इतिहास जागृती",
      desc: "गडांची वास्तुकला, युद्धनीती, जलव्यवस्थापन आणि ऐतिहासिक संदर्भ यांचा सखोल अभ्यास. युवकांना गडावर नेऊन प्रत्यक्ष इतिहासाची माहिती देणे, दिशाभूल न होता सत्य इतिहास समाजापर्यंत पोहोचवणे हे या मोहिमेचे उद्दिष्ट आहे.",
      img: "/forts/rajgad_1.jpg",
      points: [
        "प्राचीन जलव्यवस्थापन व तटबंदीचा अभ्यास",
        "दुर्ग इतिहास व संदर्भ कागदपत्रांचे संकलन",
        "युवकांना गडभ्रमंतीतून इतिहास दर्शन",
      ],
    },
  ];

  return (
    <section
      id="initiatives"
      ref={containerRef}
      className="py-16 sm:py-20 md:py-[120px] px-4 sm:px-6 md:px-10 bg-[#f8f8f8] border-b border-stone-200 font-mukta relative"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-10 lg:gap-[70px]">
        {/* Sticky Left Content */}
        <div className="lg:sticky top-[110px] md:top-[130px] h-fit">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-[#b8480d] text-xs font-bold uppercase mb-3">
            <span>🚩</span> ५ मुख्य कार्यस्तंभ
          </div>

          <h2 className="text-[clamp(2rem,4vw,3.5rem)] text-stone-900 leading-[1.15] mb-4 font-bold tracking-tight">
            शिवमुद्रा फाउंडेशनचे मुख्य कार्ये
          </h2>

          <p className="text-stone-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 font-normal">
            गडकिल्ल्यांच्या पवित्र भूमीपासून ते समाजातील गरजू मुलांपर्यंत, शिवमुद्रा फाउंडेशन अविरतपणे कार्यरत आहे. आमचे प्रत्येक पाऊल शिवरायांच्या शिकवणीला अनुसरून पडते.
          </p>

          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-stone-200 shadow-sm mb-6">
            <h4 className="text-xs sm:text-sm font-bold uppercase text-stone-500 mb-3 tracking-wider">
              कायमस्वरूपी कार्यप्रणाली
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-stone-700">
              <div className="flex items-center gap-2">
                <span className="text-[#c25e1a] font-bold">✓</span>
                <span>१२+ गडकोटांवर संवर्धन मोहिमा पूर्ण</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#c25e1a] font-bold">✓</span>
                <span>५००+ गरजू विद्यार्थ्यांना मोफत साहित्य</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#c25e1a] font-bold">✓</span>
                <span>अखंड नित्यपूजा व बलिदान मास सेवा</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#c25e1a] font-bold">✓</span>
                <span>१००% निस्वार्थ व स्वयंस्फूर्त मावळा सहभाग</span>
              </div>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#c25e1a] text-white px-7 py-3.5 rounded-full text-sm sm:text-base font-medium transition-colors shadow-md"
          >
            मोहिमेत सहभागी व्हा <span>&rarr;</span>
          </a>
        </div>

        {/* Right Stacking Cards Container */}
        <div className="flex flex-col gap-6 sm:gap-8 relative pb-10">
          {initiatives.map((item, idx) => (
            <div
              key={idx}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
              style={{
                top: `calc(90px + ${idx * 20}px)`,
              }}
              className="sticky p-5 sm:p-7 md:p-9 rounded-3xl bg-white border border-stone-200/90 shadow-[0_12px_35px_rgba(0,0,0,0.07)] transition-shadow hover:shadow-xl"
            >
              {/* Card Header */}
              <div className="flex justify-between items-start gap-4 mb-4 sm:mb-5 border-b border-stone-100 pb-3 sm:pb-4">
                <div>
                  <span className="text-xs font-bold uppercase text-[#c25e1a] tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-0.5 tracking-tight">
                    {item.title}
                  </h3>
                </div>
                <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#c25e1a]/25 shrink-0 select-none">
                  {item.num}
                </span>
              </div>

              {/* Card Content Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-center">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-xs font-bold shadow">
                    {item.tag}
                  </div>
                </div>

                <div className="flex flex-col justify-between h-full">
                  <p className="text-stone-600 text-xs sm:text-sm md:text-base leading-relaxed mb-4 font-normal">
                    {item.desc}
                  </p>
                  <ul className="space-y-2 border-t border-stone-100 pt-3">
                    {item.points.map((pt, pIdx) => (
                      <li
                        key={pIdx}
                        className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-stone-800"
                      >
                        <span className="text-[#c25e1a] mt-0.5 shrink-0">🚩</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
