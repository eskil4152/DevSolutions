"use client";

import OrdersAPI from "@/ApiCallers/OrdersAPI";
import OrdersCard from "@/app/cards/OrdersCard";

export default function Orders() {
  const { error, loading, response } = OrdersAPI();

  console.log(response?.status);

  while (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (response?.status === 200) {
    return (
      <div className="text-center flex flex-row px-[20vw] py-[10vh]">
        {response.data.map((order: any) => (
          <div key={order.id} className="px-2">
            <OrdersCard order={order} key={order.id} />
          </div>
        ))}
      </div>
    );
  } else if (response?.status === 401) {
    return (
      <div>
        <h1>Please log in to view your orders</h1>
      </div>
    );
  } else if (error) {
    return (
      <div>
        <h1>Error occured: {error.message}</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Unknown error occured</h1>
      </div>
    );
  }
}
