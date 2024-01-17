"use client";

import LogInAPI from "@/ApiCallers/LogInApi";
import Link from "next/link";
import { useState } from "react";

export default function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const [passwordVisible, setPasswordVisible] = useState(false);

  const tooglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = await LogInAPI(username, password);

    if (data.status === 200) {
      setError("");
      //window.location.href = "/";
    } else if (data.status === 401) {
      setError("Wrong Password");
    } else {
      setError("An error occured");
    }
  }

  return (
    <div className="text-center ">
      <h1 className="text-xl font-semibold mt-2">Log In</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          width={10}
          height={5}
          placeholder="Username / Email"
          className="border-2 border-black my-2 p-[3px] dark:text-black"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <br />

        <input
          type={passwordVisible ? "text" : "password"}
          id="password"
          width={10}
          height={5}
          placeholder="Password"
          className="border-2 border-black my-2 p-[3px] dark:text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />

        <div className="flex justify-center gap-10">
          <button className="border-2 border-black px-4 rounded-full mt-2 dark:border-white">
            Log In
          </button>

          <Link
            className="text-center border-2 border-black px-4 rounded-full mt-2 dark:border-white"
            href={{
              pathname: "/register",
            }}
          >
            <p>Register</p>
          </Link>
        </div>
      </form>

      <br />

      <button
        className="border-2 border-black px-4 mt-2 rounded-full dark:border-white"
        onClick={tooglePasswordVisibility}
      >
        {passwordVisible ? "Hide Password" : "Show Password"}
      </button>

      <p className="text-red-600 font-bold text-lg">{error}</p>
    </div>
  );
}
