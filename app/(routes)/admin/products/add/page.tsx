"use client";

import React, { useState } from "react";
import AddProductAPI from "@/ApiCallers/Admin/AddProductAPI";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await AddProductAPI(name, description, price);
      window.location.href = "/admin/products";
    } catch (error) {
      setError(`${error}`);
    }
  }

  return (
    <div className="container">
      <h1 className="text-center text-2xl font-bold p-4">Add new product</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-2"
      >
        <input
          type="text"
          placeholder={"Name"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-2 border-black dark:border-white px-2 py-1 rounded-md"
        />

        <input
          type="text"
          placeholder={"Description"}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border-2 border-black dark:border-white px-2 py-1 rounded-md"
        />

        <input
          type="text"
          placeholder={"Price"}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border-2 border-black dark:border-white px-2 py-1 rounded-md"
        />

        <button className="border-2 border-black dark:border-white px-2 py-1 rounded-full">
          Submit
        </button>
      </form>

      <p className="text-red-600 font-bold text-lg">{error}</p>
    </div>
  );
}
