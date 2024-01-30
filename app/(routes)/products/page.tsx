"use client";

import ProductPreview from "@/app/cards/Previews/ProductPreview";
import GetProducts from "@/ApiCallers/Products/GetProductsAPI";

export default function Products() {
  const { loading, error, response } = GetProducts();

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
        <h1 className="text-2xl font-semibold mt-5">SERVICES: </h1>
        <div
          id="projects"
          className="grid grid-cols-2 gap-y-20 py-4 justify-items-center"
        >
          {response.data.map((product: ProductType) => (
            <ProductPreview product={product} key={product.id} />
          ))}
        </div>
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
