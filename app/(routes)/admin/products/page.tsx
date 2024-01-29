"use client";

import GetProductsAdmin from "@/ApiCallers/Admin/GetAllProductsAdminAPI";
import ProductAdmin from "@/app/cards/Previews/Admin/ProductAdmin";
import React from "react";
import DeleteProductAPI from "@/ApiCallers/Admin/DeleteProductAPI";

export default function AdminProducts() {
  const { loading, error, response } = GetProductsAdmin();

  const [deleteError, setDeleteError] = React.useState("");

  const handleDeleteProduct = async (id: number) => {
    setDeleteError("");

    try {
      await DeleteProductAPI(id);
      window.location.href = "/admin/products";
    } catch (error) {
      setDeleteError(`Error: ${error}`);
    }
  };

  while (loading) {
    return <p>Loading...</p>;
  }

  if (response?.status === 200) {
    return (
      <div id="container">
        <p className="text-center mt-8">All products:</p>
        <div className="grid grid-cols-2 gap-4 p-10">
          {response.data.map((products: ProductType) => (
            <div id={products.id.toString()}>
              <ProductAdmin product={products} key={products.id} />
              <button
                onClick={() => {
                  handleDeleteProduct(products.id);
                }}
              >
                Delete
              </button>

              <button>Update (501)</button>
              <p>{deleteError}</p>
            </div>
          ))}
        </div>
      </div>
    );
  } else if (response?.status === 401 || response?.status === 403) {
    return (
      <div>
        <h1>Unauthorized</h1>
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
        <h1>Unknown error occurred</h1>
      </div>
    );
  }
}
