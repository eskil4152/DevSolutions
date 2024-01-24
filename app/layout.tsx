"use client";

import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { Overlock, Poppins } from "next/font/google";
import { useEffect, useState } from "react";

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

const metadata: Metadata = {
  title: "DevSolutions - Devs For Hire",
  description: "DevSolutions - Developers for hire",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    // Dynamically calculate and set the height of the header
    const headerElement = document.getElementById("header");
    if (headerElement) {
      setHeaderHeight(headerElement.clientHeight);
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <title>DevSolutions - Devs For Hire</title>
      </head>
      <body
        className={poppins.className}
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Header />
        <div
          id="children"
          className="flex-grow relative"
          style={{ paddingTop: `${headerHeight}px` }}
        >
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
