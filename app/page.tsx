"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [showDev, setShowDev] = useState(true);

  return (
    <div className="container text-center mt-[10vh] mb-[10vh]">
      <div className="">
        <p className="text-4xl font-bold">Welcome to DevSolutions</p>
        <Link href={"/products"}>
          <button className="border-2 border-black dark:border-white py-2 px-6 mt-2 rounded-full">
            Get Started
          </button>
        </Link>
      </div>

      <div className="mt-[10vh]">
        <p className="text-2xl font-bold mb-10">What we do</p>
        <div className="grid grid-rows-1 grid-cols-3 px-10 gap-10 min-h-[20vh]">
          <div className="border-2 border-black dark:border-white p-2">
            <p className="text-lg font-semibold">Web Solutions</p>
            <p>
              We can build your dream website. We build websites with good
              design, REST APIs with security, databases, and with hosting and
              custom host addresses if needed!
            </p>
          </div>
          <div className="border-2 border-black dark:border-white p-2">
            <p className="text-lg font-semibold">API Integrations</p>
            <p>
              We can build APIs for you, or integrate them into your app. We are
              familiar and skilled with receiving data from other sources using
              APIs, for instance Spotify and RapidAPI! We can also implement
              APIs into your server, for use with your website!
            </p>
          </div>
          <div className="border-2 border-black dark:border-white p-2">
            <p className="text-lg font-semibold">Software Development</p>
            <p>
              We can build your dream software applications for you, and build
              them with readability and Continous Development in mind, if you
              want your app to be improved later on!
            </p>
          </div>
        </div>
      </div>

      {showDev && (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 dark:bg-black dark:border-white dark:border-2">
            <p>{`This website is still under development`}</p>
            <p>{`You are currently viewing the prototype`}</p>
            <div className="flex gap-2 justify-center">
              <button
                onClick={() => {
                  setShowDev(false);
                }}
                className="font-semibold"
              >
                I understand
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
