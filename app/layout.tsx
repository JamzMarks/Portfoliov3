import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "James Marques",
  description: "James Marques - Full Stack Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" >
      <body
        className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable}  antialiased grid grid-rows-[1fr_auto] min-h-screen`}
      >
        <header className="w-full px-4 h-20 fixed top-0 left-0 text-white bg-transparent backdrop-blur-sm">
          <Navbar />
        </header>
        <main className="max-w-7xl w-full mx-auto mt-20 px-4 mb-20">
          {children}
        </main>
        <footer className=" w-full mx-auto px-4 bg-neutral-900 text-white">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
