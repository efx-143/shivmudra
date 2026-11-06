import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Gallery() {
  const photos = [
    {
      title: "किल्ले राजगड - संजीवनी माची",
      category: "गडकिल्ले संवर्धन",
      img: "/forts/rajgad_1.jpg",
    },
    {
      title: "किल्ले तोरणा - दीपोत्सव सोहळा",
      category: "नित्य पूजा व उत्सव",
      img: "/forts/torna_deepotsav.jpg",
    },
    {
      title: "किल्ले राजगड - बालेकिल्ला",
      category: "दुर्ग संवर्धन",
      img: "/forts/rajgad_balekilla.jpg",
    },
    {
      title: "किल्ले तोरणा - महादरवाजा स्वच्छता",
      category: "स्वच्छता मोहीम",
      img: "/forts/torna_1.jpg",
    },
    {
      title: "किल्ले सिंहगड - मंदिर जीर्णोद्धार",
      category: "दुर्ग अभ्यास",
      img: "/forts/sinhagad.jpg",
    },
    {
      title: "किल्ले सुधागड - पायऱ्या दुरुस्ती",
      category: "संवर्धन मोहीम",
      img: "/forts/sudhagad.jpg",
    },
    {
      title: "शालेय साहित्य वाटप - स्वप्नवेध अनाथालय",
      category: "शिक्षण साहाय्य",
      img: "/initiatives/shikshan_watap_1.jpg",
    },
    {
      title: "शालेय साहित्य वाटप - आश्रमशाळा",
      category: "विद्यार्थी मदत",
      img: "/initiatives/shikshan_watap_2.jpg",
    },
    {
      title: "धर्मवीर संभाजी महाराज स्मारक - नित्यपूजा",
      category: "नित्य पूजा",
      img: "/initiatives/nitya_puja.jpg",
    },
    {
      title: "मोफत लाठी-काठी व मर्दानी खेळ शिबीर",
      category: "युवक प्रशिक्षण",
      img: "/initiatives/lathi_kathi.jpg",
    },
    {
      title: "शिवजयंती रक्तदान शिबीर",
      category: "सामाजिक उपक्रम",
      img: "/initiatives/raktdan_1.jpg",
    },
    {
      title: "किल्ले सेगवागड - पालघर मोहीम",
      category: "दुर्ग संवर्धन",
      img: "/forts/segwagad.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fcfbfa] text-[#1a120b]">
      <Navbar />

      <div className="pt-36 md:pt-44 px-6 md:px-10 pb-24 max-w-[1400px] mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#b8480d] text-xs font-bold uppercase tracking-widest mb-4">
          <span>📸</span> छायाचित्र दालन
        </div>

        <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold tracking-tight mb-4">
          मोहीम व उपक्रम छायाचित्रे
        </h1>

        <p className="text-xl md:text-2xl text-stone-600 max-w-3xl mb-8">
          महाराष्ट्रातील गडकोटांवर केलेले प्रत्यक्ष श्रमदान, नित्यपूजा आणि समाजसेवेचे क्षणचित्रे.
        </p>

        <div className="h-[1px] w-full bg-stone-200 mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-md hover:shadow-xl transition-all group flex flex-col"
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-stone-100">
                <img
                  src={photo.img}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold">
                  {photo.category}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg text-[#1a120b] group-hover:text-[#c25e1a] transition-colors">
                  {photo.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-4">
          <Link
            href="/"
            className="bg-[#1a120b] hover:bg-[#c25e1a] text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-md inline-flex items-center gap-2"
          >
            <span>&larr;</span> मुख्यपृष्ठावर जा
          </Link>
          <Link
            href="/about"
            className="bg-white border border-stone-300 hover:border-stone-500 text-stone-800 px-8 py-3.5 rounded-full font-bold transition-all inline-flex items-center gap-2"
          >
            संस्थेची माहिती <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
