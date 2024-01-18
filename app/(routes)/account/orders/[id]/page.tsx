"use client";

import GetOrderById from "@/ApiCallers/GetOrderById";

export default function OrderById({ params }: { params: { id: string } }) {
  const { loading, error, response } = GetOrderById(params.id);

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
        <h1>Success</h1>
      </div>
    );
  } else if (response?.status === 401) {
    return <div>401</div>;
  } else if (response?.status === 404) {
    return <div>404</div>;
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
