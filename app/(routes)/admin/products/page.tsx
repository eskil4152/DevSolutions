"use client";

import GetProducts from "@/ApiCallers/Products/GetProductsAPI";

export default function AdminProducts() {
  const { loading, error, response } = GetProducts();

  while (loading) {
    return <p>Loading...</p>;
  }

  if (response?.status === 200) {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  } else if (response?.status === 401) {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  } else if (error) {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}
