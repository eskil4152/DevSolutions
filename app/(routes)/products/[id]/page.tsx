"use client";

import GetProductsById from "@/ApiCallers/GetProductByIdAPI";

export default function ProductsById({ params }: { params: { id: string } }) {
  const { loading, error, response } = GetProductsById(params.id);

  while (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (response?.status === 200) {
    return (
      <div className="text-center">
        <p>{response.data.name}</p>
        <p>{response.data.description}</p>
        <p>NOK {response.data.price}kr</p>
      </div>
    );
  } else if (response?.status === 404) {
    return (
      <div>
        <h1>Product with id {params.id} not found</h1>
      </div>
    );
  } else if (error) {
    return (
      <div>
        <h1>Error: {error.message}</h1>
      </div>
    );
  } else {
    return (
      <div>
        <p style={{ color: "red" }}>Error: Unknown error occured</p>
      </div>
    );
  }
}
