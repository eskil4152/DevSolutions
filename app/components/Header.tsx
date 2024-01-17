"use client";

import Link from "next/link";
import GetFromStorage from "../tools/GetFromStorage";

export default function Header() {
  const hasToken = GetFromStorage();

  return (
    <div
      id="header"
      className="flex justify-between items-center border-b-2 border-black p-4"
    >
      <Link
        className="w-1/3"
        href={{
          pathname: "/",
        }}
      >
        <h3 className="font-bold text-lg">DevSolutions</h3>
      </Link>

      <Link
        className="w-1/3 text-center"
        href={{
          pathname: "/products",
        }}
      >
        <p>Products</p>
      </Link>

      <div className="w-1/3 text-right">
        {hasToken ? (
          <Link
            href={{
              pathname: "/account",
            }}
          >
            <p>Account</p>
          </Link>
        ) : (
          <Link
            href={{
              pathname: "/login",
            }}
          >
            <p>Log In</p>
          </Link>
        )}
      </div>
    </div>
  );
}
