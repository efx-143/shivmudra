import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-[#fcfbfa] text-[#1a120b] font-mukta">
      <Navbar />

      <div className="pt-28 sm:pt-36 md:pt-44 px-4 sm:px-6 md:px-10 pb-20 sm:pb-24 max-w-[1400px] mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#b8480d] text-xs font-bold uppercase mb-4">
          <span>🚩</span> संस्थेचा परिचय
        </div>

        <h1 className="text-[clamp(2.2rem,5vw,4rem)] font-normal text-[#1a120b] leading-tight mb-3 font-royal">
          शिवमुद्रा फाउंडेशन महाराष्ट्र राज्य
        </h1>

        <p className="text-base sm:text-lg md:text-2xl text-stone-600 max-w-3xl mb-8">
          छत्रपती शिवाजी महाराजांच्या पावन गडकिल्ल्यांचे संवर्धन, नित्यपूजा, शालेय साहित्य वाटप आणि सामाजिक बांधिलकीसाठी समर्पित संस्था.
        </p>

        <div className="h-[1px] w-full bg-stone-200 mb-10"></div>

        {/* Registration & Basic Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-14">
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-stone-200 shadow-sm">
            <span className="text-2xl mb-2 block">📜</span>
            <h4 className="text-xs font-bold text-stone-500 uppercase mb-1">
              शासकीय नोंदणी क्रमांक
            </h4>
            <p className="text-base sm:text-lg font-bold text-[#1a120b]">
              पुणे / ००००२३५० / २०२५
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-stone-200 shadow-sm">
            <span className="text-2xl mb-2 block">🏛️</span>
            <h4 className="text-xs font-bold text-stone-500 uppercase mb-1">
              अंतर्गत कार्यप्रणाली
            </h4>
            <p className="text-base sm:text-lg font-bold text-[#1a120b]">
              गडकिल्ले फाउंडेशन अंतर्गत
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-stone-200 shadow-sm sm:col-span-2 md:col-span-1">
            <span className="text-2xl mb-2 block">📞</span>
            <h4 className="text-xs font-bold text-stone-500 uppercase mb-1">
              अध्यक्ष व संपर्क
            </h4>
            <p className="text-base sm:text-lg font-bold text-[#1a120b]">
              श्री. ओंकार वाळुंज (७७०९३५३१५७)
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-14">
          <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-white border border-stone-200 shadow-md">
            <h3 className="text-xl sm:text-2xl text-[#1a120b] mb-3 flex items-center gap-2 font-royal font-normal">
              <span className="text-[#c25e1a]">🚩</span> आमचे ध्येय (Vision)
            </h3>
            <p className="text-stone-700 leading-relaxed text-sm sm:text-base md:text-lg">
              सह्याद्रीच्या कुशीतील प्रत्येक शिवकालीन दुर्गाचे पावित्र्य, इतिहास आणि वैभव अबाधित राखणे. नव्या पिढीतील युवकांमध्ये स्वराज्याचा ज्वलंत इतिहास, राष्ट्राभिमान आणि सामाजिक बांधिलकीची भावना निर्माण करणे.
            </p>
          </div>

          <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-white border border-stone-200 shadow-md">
            <h3 className="text-xl sm:text-2xl text-[#1a120b] mb-3 flex items-center gap-2 font-royal font-normal">
              <span className="text-[#c25e1a]">⚔️</span> आमची उद्दिष्टे (Mission)
            </h3>
            <ul className="space-y-2.5 text-stone-700 text-sm sm:text-base">
              <li className="flex items-start gap-2">
                <span className="text-[#c25e1a] font-bold">✓</span>
                <span>गडकिल्ल्यांची नियमित स्वच्छता, टाक्यांची माती काढणे व मंदिरांची डागडुजी.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c25e1a] font-bold">✓</span>
                <span>धर्मवीर संभाजी महाराज स्मारक डेक्कन येथे अखंड नित्यपूजा व बलिदान मास सेवा.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c25e1a] font-bold">✓</span>
                <span>अनाथ व गरजू विद्यार्थ्यांना शालेय साहित्य वाटप करून शिक्षणाचा पाया मजबूत करणे.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c25e1a] font-bold">✓</span>
                <span>रक्तदान शिबीरे, लाठी-काठी प्रशिक्षण आणि आपत्कालीन सामाजिक मदत कार्य.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Back Link */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/"
            className="text-center bg-[#1a120b] hover:bg-[#c25e1a] text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-md inline-flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            <span>&larr;</span> मुख्यपृष्ठावर जा
          </Link>
          <Link
            href="/gallery"
            className="text-center bg-white border border-stone-300 hover:border-stone-500 text-stone-800 px-8 py-3.5 rounded-full font-bold transition-all inline-flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            मोहीम छायाचित्रे पहा <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
