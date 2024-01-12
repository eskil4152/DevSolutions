import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { Poppins } from "next/font/google";
import { Overlock } from "next/font/google";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "auto",
});

const overlock = Overlock({
  subsets: ["latin"],
  weight: "400",
  style: ["normal"],
  display: "auto",
});

export const metadata: Metadata = {
  title: "DevSolutions - Devs For Hire",
  description: "DevSolutions - Developers for hire",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Header />
        <Toaster position="bottom-center" />
        <div id="children" className="flex-grow relative">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
