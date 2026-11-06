import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "शिवमुद्रा फाउंडेशन महाराष्ट्र राज्य | गडकिल्ले संवर्धन व सेवा",
  description:
    "शिवमुद्रा फाउंडेशन महाराष्ट्र राज्य (नोंदणी क्र. पुणे/००००२३५०/२०२५) - छत्रपती शिवाजी महाराजांच्या गडकिल्ल्यांचे संवर्धन, नित्यपूजा, शालेय साहित्य वाटप व सामाजिक उपक्रम.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/logo.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="mr" className="h-full antialiased scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="min-h-full flex flex-col bg-[#0d0905] text-[#222] selection:bg-[#e05a1b] selection:text-white font-mukta">
        {children}
      </body>
    </html>
  );
}
