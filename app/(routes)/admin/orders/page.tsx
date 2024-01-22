'use client'

import GetAllOrdersAPI from "@/ApiCallers/Admin/GetAllOrders.API";

export default function AdminOrders() {
  const { loading, error, response } = GetAllOrdersAPI();

  while (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
      );
  }

  if (response?.status === 200) {
    return (
      <div className="text-center p-5">
        { response.data[0] == null ? (<h1>No people</h1>) : (
          response.data.map((order: OrderType) => (
            <div key={order.id} className="py-4">
              <h1>{order.id}</h1>
              <h1>{order.user.username}</h1>
              <h1>{order.orderDate}</h1>
              <h1>{order.paymentMethod}</h1>
              <h1>{order.paymentStatus}</h1>
              <h1>{order.orderStatus}</h1>
            </div>
            )))
        }
      </div>
      );
  } else if (response?.status === 401 || response?.status === 403) {
    return (
      <div>
        <h1>You are not authorized to see this page</h1>
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
