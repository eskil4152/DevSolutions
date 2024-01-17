"use client";

import "dotenv/config";

export default function Home() {
  require("dotenv").config();

  return (
    <div className="container border-2 border-black p-2">
      <p>Hello and welcome</p>

      <div className="bottom-0">
        <button>b1</button>
        <button>b2</button>
      </div>
    </div>
  );
}
