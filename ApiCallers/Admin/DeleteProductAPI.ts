import apiUrl from "@/app/tools/config";

async function DeleteProductAPI(id: number) {
  const response = await fetch(`${apiUrl}/api/admin/products/delete/` + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (response.status === 404) {
    throw new Error(`Product with id ${id} does not exist`);
  } else if (response.status === 401 || response.status === 403) {
    throw new Error(`You are not authorized to delete products`);
  } else if (!response.ok) {
    throw new Error(`Failed to delete product. Unknown error occurred`);
  }

  return response;
}

export default DeleteProductAPI;
