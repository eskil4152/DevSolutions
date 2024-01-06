"use client";

import { useState } from "react";

export default function Account() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [passwordVisible, setPasswordVisible] = useState(false);

  const tooglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  function PlaceHolder() {
    console.log("Username: " + username);
    console.log("Password: " + password);
  }

  return (
    <div className="text-center ">
      <h1 className="text-xl font-semibold mt-2">Log In / Register</h1>

      <form onSubmit={PlaceHolder}>
        <input
          type="text"
          id="username"
          width={10}
          height={5}
          placeholder="Username / Email"
          className="border-2 border-black my-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <br />

        <input
          type={passwordVisible ? "text" : "password"}
          id="username"
          width={10}
          height={5}
          placeholder="Password"
          className="border-2 border-black my-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />

        <button className="border-2 border-black px-4 rounded-full dark:border-white">
          Log In / Register
        </button>
      </form>

      <br />

      <button
        className="border-2 border-black px-4 mt-2 rounded-full dark:border-white"
        onClick={tooglePasswordVisibility}
      >
        {passwordVisible ? "Hide Password" : "Show Password"}
      </button>
    </div>
  );
}
