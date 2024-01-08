"use client";

import RegisterAPI from "@/ApiCallers/RegisterApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Register() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const [error, setError] = useState("");

  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [validUsername, setValidUsername] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password needs to be at least 8 characters, " +
          "and contain at least 1 uppercase letter, 1 lowercare letter, and 1 number"
      );
      setValidPassword(false);
    } else if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      setValidPassword(false);
    } else {
      setPasswordError("");
      setValidPassword(true);
    }
  }, [password, confirmPassword]);

  useEffect(() => {
    if (!emailRegex.test(email)) {
      setEmailError("Email invalid");
      setValidEmail(false);
    } else {
      setEmailError("");
      setValidEmail(true);
    }
  }, [email]);

  useEffect(() => {
    if (username.length < 5) {
      setUsernameError("Username too short");
      setValidUsername(false);
    } else {
      setUsernameError("");
      setValidUsername(true);
    }
  }, [username]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!validUsername || !validEmail || !validPassword) {
      console.log(validEmail + ", " + validPassword + ", " + validUsername);
      setError("Please fill all requirements");
      return;
    }

    const data = await RegisterAPI(username, password, email);

    if (data.status === 200) {
      setError("");
      router.push("/");
    } else if (data.status === 401) {
      setError("User already exists");
    } else {
      setError("An error occured");
    }
  }

  return (
    <div className="text-center">
      <h1 className="text-xl font-semibold mt-2">Register</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="username"
            placeholder="Username"
            className="border-2 border-black my-2 p-[3px]"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p className="text-red-600 font-bold text-sm">{usernameError}</p>
        </div>

        <div>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="border-2 border-black my-2 p-[3px]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="text-red-600 font-bold text-sm">{emailError}</p>
        </div>

        <div>
          <input
            type={passwordVisible ? "text" : "password"}
            id="password"
            placeholder="Password"
            className="border-2 border-black my-2 p-[3px]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <input
            type={passwordVisible ? "text" : "password"}
            id="confirmPassword"
            placeholder="Confirm Password"
            className="border-2 border-black my-2 p-[3px]"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p className="text-red-600 font-bold text-sm">{passwordError}</p>
        </div>

        <div className="flex justify-center gap-10">
          <button className="border-2 border-black px-4 rounded-full mt-2 dark:border-white">
            Register
          </button>
        </div>
      </form>

      <button
        className="border-2 border-black px-4 mt-2 rounded-full dark:border-white"
        onClick={togglePasswordVisibility}
      >
        {passwordVisible ? "Hide Password" : "Show Password"}
      </button>

      <p className="text-red-600 font-bold text-lg">{error}</p>
    </div>
  );
}
