import apiUrl from "@/app/tools/config";

export default async function AddProductAPI(
  name: string,
  description: string,
  price: string,
) {
  const response = await fetch(`${apiUrl}/api/admin/products/new`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      productName: name,
      description: description,
      price: price,
    }),
    credentials: "include",
  });

  console.log("GOT STATUS " + response.status);

  if (response.status === 409) {
    throw new Error(`Product with name ${name} already exists`);
  } else if (response.status === 401 || response.status === 403) {
    throw new Error(`You are not authorized to add products`);
  } else if (!response.ok) {
    throw new Error(`Failed to add product. Unknown error occurred`);
  }

  return response;
}
