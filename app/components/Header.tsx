"use client";

import Link from "next/link";
import GetFromStorage from "../tools/GetFromStorage";

export default function Header() {
  const hasToken = GetFromStorage();

  return (
    <div
      id="header"
      className="flex justify-between items-center border-b-2 border-black p-6
      fixed top-0 w-full z-50"
    >
      <Link
        className="w-1/3"
        href={{
          pathname: "/",
        }}
      >
        <h3 className="font-bold text-3xl">DEVSOLUTIONS</h3>
      </Link>

      <div className={"w-1/3 flex flex-row justify-center gap-10"}>
        <Link
          className="text-center"
          href={{
            pathname: "/products",
          }}
        >
          <p className="font-semibold text-xl">Services</p>
        </Link>

        <Link
          className="text-center"
          href={{
            pathname: "/customerservice",
          }}
        >
          <p className="font-semibold text-xl">Contact Us</p>
        </Link>
      </div>

      <div className="w-1/3 text-right">
        {hasToken ? (
          <Link
            href={{
              pathname: "/account",
            }}
          >
            <p className="font-semibold text-xl">Account</p>
          </Link>
        ) : (
          <Link
            href={{
              pathname: "/login",
            }}
          >
            <p className="font-semibold text-xl">Log In</p>
          </Link>
        )}
      </div>
    </div>
  );
}
