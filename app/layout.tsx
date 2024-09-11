import type { Metadata } from "next";
import { Bricolage_Grotesque, Oswald } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import GrainEffect from "@/components/visualEffects/grain-effect";
import  Cursor  from "@/components/visualEffects/cursor/cursor";


// Fonts
const MainFont = Bricolage_Grotesque({ subsets: ["latin"], weight: ["400","500","600"]});
const OswaldFont = Oswald({ subsets: ["latin"], weight: ["400","500","600"], variable: "--font-oswald"});
const PixelFont = localFont({ src: "./fonts/pixelfont7.ttf",  variable: "--font-pixel",
  weight: "100 900",});
/* // const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
}); */

// MetaData
export const metadata: Metadata = {
  title: "EAG Portfolio",
  description: "Elevation Accountancy Group Portfolio",
  keywords: [ 'Financial', 'Tax Returns', 'Book Keeping']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      
        className={cn(MainFont.className, OswaldFont.variable, PixelFont.variable)  }>
          <GrainEffect/>
          <Cursor color="#fff"/>
          {children}
        </body>
    </html>
  );
}
