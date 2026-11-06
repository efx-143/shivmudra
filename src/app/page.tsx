import Navbar from "@/components/Navbar";
import HeroParallax from "@/components/HeroParallax";
import TextReveal from "@/components/TextReveal";
import VideoSection from "@/components/VideoSection";
import ChevronMasks from "@/components/ChevronMasks";
import Steps from "@/components/Steps";
import { AnimatedImageReveal } from "@/components/AnimatedImageReveal";
import { AnimatedCardReveal } from "@/components/AnimatedCardReveal";

export default function Home() {
  const forts = [
    {
      name: "किल्ले तोरणा (प्रचंडगड)",
      history: "इ.स. १६४६ - छत्रपती शिवरायांनी वयाच्या १६ व्या वर्षी जिंकून स्वराज्याचे तोरण बांधले.",
      work: "महादरवाजा साफसफाई, मेंगाई देवी मंदिर रंगकाम, प्राचीन टाके सफाई, दीपोत्सव व महाशिवरात्री पूजा.",
      img: "/forts/torna_1.jpg",
      tag: "स्वराज्याचे पहिले पाऊल",
    },
    {
      name: "किल्ले राजगड",
      history: "हिंदवी स्वराज्याची पहिली राजधानी, गडांचा राजा आणि राजांचा गड. २५ वर्षे शिवरायांचे प्रमुख केंद्र.",
      work: "संजीवनी माची, सुवेळा माची, पद्मावती माची व बालेकिल्ला संवर्धन, स्वच्छता आणि दुर्ग अभ्यास मोहीम.",
      img: "/forts/rajgad_balekilla.jpg",
      tag: "स्वराज्याची राजधानी",
    },
    {
      name: "किल्ले सिंहगड (कोंढाणा)",
      history: "इ.स. १६७० - नरवीर तानाजी मालुसरे यांच्या पराक्रमाने पावन झालेली शौर्यभूमी.",
      work: "गडस्वच्छता, हिंदू नववर्ष गुढीपाडवा स्वागतोत्सव, आणि प्राचीन मंदिराचा शोध व जीर्णोद्धार मोहीम.",
      img: "/forts/sinhagad.jpg",
      tag: "शौर्याचे प्रतीक",
    },
    {
      name: "किल्ले सुधागड (भोरपगड)",
      history: "स्वराज्याची उपराजधानी म्हणून विचार झालेला सह्याद्रीतील अजिंक्य दुर्ग.",
      work: "भोरपई देवी मंदिर परिसर, वाड्यांचे अवशेष जतन, पाण्याचे टाके स्वच्छता व पायऱ्यांची डागडुजी.",
      img: "/forts/sudhagad.jpg",
      tag: "अजिंक्य दुर्ग",
    },
    {
      name: "किल्ले रायरेश्वर व सेगवागड",
      history: "१६४५ - छत्रपती शिवाजी महाराजांनी रायरेश्वराच्या पिंडीवर रक्ताचा अभिषेक करून घेतलेली स्वराज्य शपथ.",
      work: "स्वराज्य शपथ सोहळा आयोजन, पालघर जिल्ह्यातील सेगवागडावर संयुक्त स्वच्छता व टाके संवर्धन.",
      img: "/forts/segwagad.jpg",
      tag: "स्वराज्य शपथभूमी",
    },
    {
      name: "किल्ले विसापूर व रोहिडा",
      history: "पुणे-कोकण व्यापार मार्गांचे संरक्षक दुर्ग व विचित्रागडाची अभेद्य तटबंदी.",
      work: "महादेव मंदिर परिसर स्वच्छता, भगवा ध्वजरोहण, तटबंदी स्वच्छता आणि दुर्ग अभ्यास.",
      img: "/forts/visapur.jpg",
      tag: "व्यापारमार्ग संरक्षक",
    },
  ];

  const awards = [
    {
      title: "जिजाऊसृष्टी प्रतिष्ठान ट्रस्ट सन्मान",
      org: "राजमाता जिजाऊ जन्मोत्सवानिमित्त",
      desc: "गडकिल्ले संवर्धन क्षेत्रातील अविरत व उल्लेखनीय योगदानाबद्दल संस्थेचा करण्यात आलेला विशेष सन्मान.",
      img: "/awards/jijau_trust.jpg",
    },
    {
      title: "मावळा जवान संघटना सन्मान",
      org: "मावळा जवान संघटना महाराष्ट्र",
      desc: "गडकोटांचे पावित्र्य राखणे आणि प्रत्यक्ष श्रमदानातून इतिहास जतन केल्याबद्दल गौरव.",
      img: "/awards/mavla_jawan.jpg",
    },
    {
      title: "श्री छत्रपती शिवाजी महाराज मंदिर भिवंडी सन्मान",
      org: "संस्थापक/अध्यक्ष राजू दादा चौधरी",
      desc: "भव्य शिवमंदिरात सन्मानचिन्ह देऊन गौरव तसेच श्री शिवाजी रायगड स्मारक मंडळाकडून सत्कार.",
      img: "/awards/chhatrapati_trust.jpg",
    },
    {
      title: "शिवशंभू दुर्ग प्रतिष्ठान सन्मान",
      org: "शिवशंभू दुर्ग प्रतिष्ठान व आस गडकोटांची",
      desc: "सातत्यपूर्ण गड संवर्धन कार्य आणि समाजोपयोगी उपक्रमांबद्दल संस्थात्मक सन्मान.",
      img: "/awards/shivshambhu.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-[#fcfbfa] overflow-x-hidden font-mukta">
      <Navbar />

      {/* Hero Section with Parallax Effect & Rajmudra */}
      <HeroParallax />

      {/* Text Reveal Mission Statement */}
      <TextReveal />

      {/* Video / Visual Cinematic Showcase */}
      <VideoSection />

      {/* Chevron Masks Interactive Gallery */}
      <ChevronMasks />

      {/* 5 Core Pillars Section */}
      <Steps />

      {/* President's Message (अध्यक्षीय मनोगत) */}
      <section id="president" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-10 bg-white border-b border-stone-200">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="relative aspect-[4/3] md:aspect-[5/4] rounded-3xl overflow-hidden shadow-2xl border border-stone-200">
            <AnimatedImageReveal
              src="/initiatives/lathi_kathi.jpg"
              alt="शिवमुद्रा फाउंडेशन उपक्रम"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex flex-col justify-end p-6 sm:p-8">
              <span className="text-amber-400 font-bold text-xs uppercase font-mukta">
                अध्यक्षीय मनोगत • २०२५-२६
              </span>
              <h4 className="text-white text-2xl md:text-3xl font-royal mt-1 leading-tight">
                श्री. ओंकार वाळुंज
              </h4>
              <p className="text-stone-300 text-xs sm:text-sm font-mukta">
                अध्यक्ष, शिवमुद्रा फाउंडेशन महाराष्ट्र राज्य (मो. ७७०९३५३१५७)
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-start gap-5 sm:gap-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#b8480d] text-xs font-bold uppercase font-mukta">
              <span>🚩</span> अध्यक्षीय मनोगत
            </div>

            <h2 className="text-[clamp(1.7rem,3.2vw,2.8rem)] text-[#1a120b] leading-[1.25] font-royal font-normal">
              "गडकिल्ले संवर्धन हे आपल्या इतिहासाचे आणि संस्कृतीचे रक्षण करण्याचे कर्तव्य!"
            </h2>

            <blockquote className="text-stone-700 text-sm sm:text-base md:text-lg leading-relaxed border-l-4 border-[#c25e1a] pl-4 sm:pl-5 italic font-mukta">
              "मला अत्यंत आनंद होत आहे की, गडकिल्ले फाउंडेशन अंतर्गत 'शिवमुद्रा फाउंडेशन महाराष्ट्र राज्य' मागील अनेक वर्षांपासून समाजहिताच्या विविध उपक्रमांद्वारे आपले कार्य सातत्याने आणि प्रभावीपणे पार पाडत आहे. गडकिल्ले संवर्धन हे आपल्या इतिहासाचे आणि संस्कृतीचे जतन करण्यासाठी अत्यंत महत्त्वाचे कार्य आहे. या कार्यात फाउंडेशनने युवकांना प्रेरित करून अनेक किल्ल्यांच्या स्वच्छता व जतनासाठी उल्लेखनीय योगदान दिले आहे. तसेच गरजू विद्यार्थ्यांना मोफत शालेय साहित्य वाटप करून त्यांच्या शिक्षणाला हातभार लावण्याचे कार्यही अविरत सुरू आहे."
            </blockquote>

            <div className="w-full pt-4 border-t border-stone-200 flex flex-wrap justify-between items-center gap-4">
              <div>
                <p className="text-[#1a120b] text-xl font-royal">
                  श्री. ओंकार वाळुंज
                </p>
                <p className="text-xs text-stone-500 font-mukta">
                  अध्यक्ष, शिवमुद्रा फाउंडेशन | नोंदणी क्र. पुणे/००००२३५०/२०२५
                </p>
              </div>

              <a
                href="#contact"
                className="bg-[#1a120b] hover:bg-[#c25e1a] text-white px-7 py-3 rounded-full text-sm font-bold transition-all shadow-md flex items-center gap-2 font-mukta"
              >
                संपर्क साधा <span>&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Forts Showcase (प्रमुख गडकिल्ले संवर्धन) */}
      <section id="forts" className="py-16 sm:py-20 md:py-[120px] px-4 sm:px-6 md:px-10 bg-[#16100b] text-white">
        <div className="max-w-[1400px] mx-auto mb-10 sm:mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase font-mukta mb-4">
            <span>🚩</span> गडकिल्ले संवर्धन मोहीम
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-10">
            <div>
              <h2 className="text-[clamp(1.9rem,4vw,3.5rem)] leading-[1.2] mb-3 font-royal font-normal">
                स्वराज्यातील पावन गडकोटांचे जतन
              </h2>
              <p className="text-stone-300 text-sm sm:text-base md:text-xl max-w-[750px] font-mukta">
                शिवमुद्रा फाउंडेशनने प्रत्यक्ष श्रमदानातून संवर्धित केलेले छत्रपती शिवरायांचे ऐतिहासिक किल्ले.
              </p>
            </div>

            <a
              href="#contact"
              className="w-full sm:w-auto text-center bg-gradient-to-r from-[#d9531e] to-[#b83807] hover:from-[#e5622c] hover:to-[#cb420f] text-white px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-bold transition-all whitespace-nowrap shadow-xl font-mukta"
            >
              पुढील मोहिमेत सहभागी व्हा &rarr;
            </a>
          </div>
        </div>

        {/* Fort Cards Grid */}
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {forts.map((fort, idx) => (
            <AnimatedCardReveal key={idx} delay={idx * 0.1}>
              <div className="absolute top-0 left-0 w-full h-full transition-transform duration-700 group-hover:scale-105">
                <img
                  src={fort.img}
                  alt={fort.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent"></div>

              {/* Fort Card Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 z-10">
                <span className="inline-block px-3 py-1 rounded-md bg-[#d9531e] text-white text-xs font-bold uppercase mb-2 sm:mb-3 shadow font-mukta">
                  {fort.tag}
                </span>

                <h3 className="text-xl sm:text-2xl font-normal mb-2 text-white group-hover:text-amber-400 transition-colors font-royal">
                  {fort.name}
                </h3>

                <p className="text-xs text-amber-200/90 font-medium mb-2 sm:mb-3 font-mukta">
                  {fort.history}
                </p>

                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 font-mukta">
                  {fort.work}
                </p>

                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 group-hover:underline font-mukta">
                  संवर्धन अहवाल <span>&rarr;</span>
                </div>
              </div>
            </AnimatedCardReveal>
          ))}
        </div>
      </section>

      {/* Social Impact / Numbers Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 bg-[#f4ece3] border-b border-stone-200">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
          <div className="p-4 sm:p-6 rounded-2xl bg-white/75 backdrop-blur-sm border border-stone-200 shadow-sm">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-royal text-[#c25e1a] mb-1 sm:mb-2">
              १२+
            </h3>
            <p className="text-xs sm:text-sm md:text-base font-bold text-stone-700 font-mukta">
              गडकिल्ले संवर्धन मोहिमा
            </p>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl bg-white/75 backdrop-blur-sm border border-stone-200 shadow-sm">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-royal text-[#c25e1a] mb-1 sm:mb-2">
              ५००+
            </h3>
            <p className="text-xs sm:text-sm md:text-base font-bold text-stone-700 font-mukta">
              होतकरू विद्यार्थ्यांना शालेय मदत
            </p>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl bg-white/75 backdrop-blur-sm border border-stone-200 shadow-sm">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-royal text-[#c25e1a] mb-1 sm:mb-2">
              १०+
            </h3>
            <p className="text-xs sm:text-sm md:text-base font-bold text-stone-700 font-mukta">
              शाळा व अनाथालयांमध्ये उपक्रम
            </p>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl bg-white/75 backdrop-blur-sm border border-stone-200 shadow-sm">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-royal text-[#c25e1a] mb-1 sm:mb-2">
              ५२+
            </h3>
            <p className="text-xs sm:text-sm md:text-base font-bold text-stone-700 font-mukta">
              वार्षिक नित्यपूजा व दीपोत्सव
            </p>
          </div>
        </div>
      </section>

      {/* Awards & Recognitions Section */}
      <section id="awards" className="py-16 sm:py-20 md:py-[120px] px-4 sm:px-6 md:px-10 bg-white">
        <div className="max-w-[1400px] mx-auto mb-10 sm:mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#b8480d] text-xs font-bold uppercase font-mukta mb-4">
            <span>🏆</span> सन्मान व गौरव
          </div>

          <h2 className="text-[clamp(1.9rem,3.8vw,3.2rem)] text-[#1a120b] leading-[1.2] mb-3 font-royal font-normal">
            संस्थेला लाभलेले सन्मान व पुरस्कार
          </h2>
          <p className="text-stone-600 text-sm sm:text-base md:text-lg max-w-[750px] font-mukta">
            शिवमुद्रा फाउंडेशनच्या निःस्वार्थ गडकिल्ले संवर्धन व सामाजिक कार्याची विविध नामांकित संस्था व विश्वस्त मंडळांकडून झालेली कदर.
          </p>
        </div>

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {awards.map((award, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-[#fdfbf9] border border-stone-200 shadow-md hover:shadow-xl transition-shadow flex flex-col sm:flex-row gap-5 sm:gap-6 items-center"
            >
              <div className="w-full sm:w-44 md:w-48 h-44 sm:h-48 rounded-2xl overflow-hidden shrink-0 shadow-sm border border-stone-200">
                <img
                  src={award.img}
                  alt={award.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div>
                <span className="text-xs font-bold uppercase text-[#c25e1a] font-mukta">
                  {award.org}
                </span>
                <h3 className="text-lg sm:text-xl md:text-2xl text-[#1a120b] mt-1 mb-2 font-royal">
                  {award.title}
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-mukta">
                  {award.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Join & Contact Section */}
      <section id="contact" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 bg-[#1e1610] text-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase font-mukta mb-4">
              <span>🚩</span> शिवकार्यात सहभागी व्हा
            </div>

            <h2 className="text-[clamp(1.9rem,3.8vw,3.2rem)] leading-[1.2] mb-5 font-royal font-normal">
              गडकिल्ले संवर्धनाच्या पवित्र कार्यात हातभार लावा!
            </h2>

            <p className="text-stone-300 text-sm sm:text-base md:text-lg leading-relaxed mb-8 font-mukta">
              तुम्ही एक स्वयंसेवक म्हणून गडकिल्ले स्वच्छता मोहिमेत सामील होऊ शकता किंवा शालेय साहित्य वाटप, रक्तदान शिबीर अशा उपक्रमांना सहकार्य करू शकता.
            </p>

            <div className="space-y-4 text-stone-200 text-sm sm:text-base font-mukta">
              <div className="flex items-start gap-3">
                <span className="text-2xl mt-0.5">📍</span>
                <div>
                  <p className="font-bold text-white">मुख्यालय / कार्यक्षेत्र</p>
                  <p className="text-stone-400 text-xs sm:text-sm">पुणे, सातारा, रायगड व संपूर्ण महाराष्ट्र राज्य</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl mt-0.5">📞</span>
                <div>
                  <p className="font-bold text-white">संपर्क क्रमांक</p>
                  <a href="tel:7709353157" className="text-amber-400 text-base sm:text-lg font-bold hover:underline font-royal">
                    ७७०९३५३१५७ (श्री. ओंकार वाळुंज)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl mt-0.5">🌐</span>
                <div>
                  <p className="font-bold text-white">अधिकृत संकेतस्थळ</p>
                  <a href="https://shivmudra.foundation" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">
                    shivmudra.foundation
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl mt-0.5">🏛️</span>
                <div>
                  <p className="font-bold text-white">शासकीय नोंदणी क्रमांक</p>
                  <p className="text-stone-400 text-xs sm:text-sm">पुणे/००००२३५०/२०२५ (महाराष्ट्र राज्य)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Volunteer Form */}
          <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-black/40 border border-white/10 backdrop-blur-md shadow-2xl">
            <h3 className="text-xl sm:text-2xl mb-2 font-royal">स्वयंसेवक नोंदणी फॉर्म</h3>
            <p className="text-stone-400 text-xs sm:text-sm mb-6 font-mukta">
              पुढील मोहिमेची माहिती मिळवण्यासाठी व सहभागासाठी आपले तपशील नोंदवा.
            </p>

            <form className="space-y-4 font-mukta">
              <div>
                <label className="block text-xs font-semibold uppercase text-stone-300 mb-1">
                  पूर्ण नाव
                </label>
                <input
                  type="text"
                  placeholder="उदा. राहुल सचिन देशमुख"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-stone-500 focus:outline-none focus:border-amber-400 text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-stone-300 mb-1">
                    मोबाईल क्रमांक
                  </label>
                  <input
                    type="tel"
                    placeholder="९८xxxxxxxx"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-stone-500 focus:outline-none focus:border-amber-400 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-stone-300 mb-1">
                    शहर / जिल्हा
                  </label>
                  <input
                    type="text"
                    placeholder="उदा. पुणे / सातारा / मुंबई"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-stone-500 focus:outline-none focus:border-amber-400 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-stone-300 mb-1">
                  सहभागाचे क्षेत्र निवडा
                </label>
                <select className="w-full px-4 py-3 rounded-xl bg-[#2a2018] border border-white/15 text-white focus:outline-none focus:border-amber-400 text-sm">
                  <option value="forts">गडकिल्ले संवर्धन व स्वच्छता मोहीम</option>
                  <option value="school">शालेय साहित्य वाटप उपक्रम</option>
                  <option value="blood">रक्तदान व सामाजिक शिबीर</option>
                  <option value="research">दुर्ग अभ्यास व इतिहास संशोधन</option>
                </select>
              </div>

              <button
                type="button"
                className="w-full mt-4 bg-gradient-to-r from-[#d9531e] to-[#b83807] hover:from-[#e5622c] hover:to-[#cb420f] text-white py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-all shadow-lg hover:shadow-orange-950/50 font-mukta"
              >
                🚩 मोहिमेत नाव नोंदवा
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#110c08] text-white pt-14 sm:pt-16 md:pt-24 px-4 sm:px-6 md:px-10 pb-10 border-t border-stone-800">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between mb-12 sm:mb-16 gap-10">
            <div className="max-w-md">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/logo.png"
                  alt="शिवमुद्रा"
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h3 className="text-xl sm:text-2xl font-royal leading-none">शिवमुद्रा फाउंडेशन</h3>
                  <p className="text-xs text-amber-300 font-mukta mt-1">महाराष्ट्र राज्य</p>
                </div>
              </div>
              <p className="text-stone-400 text-xs sm:text-sm leading-relaxed mb-4 font-mukta">
                गडकिल्ले फाउंडेशन अंतर्गत कार्यरत. छत्रपती शिवाजी महाराजांच्या गडकिल्ल्यांचे संवर्धन, नित्यपूजा, शालेय साहित्य वाटप व सामाजिक उपक्रमांसाठी समर्पित.
              </p>
              <p className="text-xs text-stone-500 font-mono">
                नोंदणी क्रमांक: पुणे/००००२३५०/२०२५
              </p>
            </div>

            <div className="flex gap-10 sm:gap-16 md:gap-24 flex-wrap font-mukta">
              <div className="flex flex-col gap-2.5 text-xs sm:text-sm">
                <p className="font-bold text-amber-400 uppercase text-xs">
                  महत्त्वाचे दुवे
                </p>
                <a href="#initiatives" className="text-stone-300 hover:text-white transition-colors">
                  ५ मुख्य कार्ये
                </a>
                <a href="#forts" className="text-stone-300 hover:text-white transition-colors">
                  गडकिल्ले संवर्धन
                </a>
                <a href="#president" className="text-stone-300 hover:text-white transition-colors">
                  अध्यक्षीय मनोगत
                </a>
                <a href="#awards" className="text-stone-300 hover:text-white transition-colors">
                  सन्मान व पुरस्कार
                </a>
              </div>

              <div className="flex flex-col gap-2.5 text-xs sm:text-sm">
                <p className="font-bold text-amber-400 uppercase text-xs">
                  संवर्धित किल्ले
                </p>
                <span className="text-stone-400">किल्ले तोरणा</span>
                <span className="text-stone-400">किल्ले राजगड</span>
                <span className="text-stone-400">किल्ले सिंहगड</span>
                <span className="text-stone-400">किल्ले सुधागड</span>
                <span className="text-stone-400">किल्ले रोहिडा</span>
              </div>
            </div>
          </div>

          {/* Huge Brand Typography */}
          <div className="mb-6 sm:mb-8 overflow-hidden select-none">
            <h1 className="text-[clamp(3.5rem,15vw,18rem)] font-normal leading-[0.8] text-white/5 whitespace-nowrap font-royal">
              शिवमुद्रा
            </h1>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center border-t border-stone-800 pt-6 sm:pt-8 gap-4 text-xs text-stone-500 font-mukta">
            <p>© २०२६ शिवमुद्रा फाउंडेशन महाराष्ट्र राज्य. सर्व हक्क राखीव.</p>
            <div className="flex items-center gap-2">
              <span>Developed with pride by</span>
              <a
                href="https://povsanyam.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-amber-400 transition-colors font-medium underline"
              >
                povsanyam.me
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
