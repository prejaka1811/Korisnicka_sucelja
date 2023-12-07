import type { Metadata } from "next";
import clsx from "clsx";
import {
  Inter,
  Roboto,
  Roboto_Condensed,
  Playfair_Display,
} from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";






const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const roboto_condensed = Roboto_Condensed({
  weight: ["300", "700"],
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
});
const playfairDisplay = Playfair_Display({
  weight: ["400", "800"],
  subsets: ["latin"],
  variable: "--font-playfair",
});



export const metadata: Metadata = {       //ime filea 
  title: {
    template: "Sizzle and stir | %s",
    default: "Sizzle and stir ",
  },
  description: "Next.js lab project",
};





export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        roboto.variable,
        roboto_condensed.variable,
        playfairDisplay.variable
      )}
    >

      <body className={inter.className}>  
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
