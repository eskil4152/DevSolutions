import Link from "next/link";

interface TypeProps {
  order: OrderType | undefined;
}

export default function OrdersCard({ order }: any) {
  const orderDate = new Date(order.orderDate);
  const formattedDate = orderDate.toLocaleDateString("en-GB");

  return (
    <div className="p-2 border-[1px] border-black dark:border-white">
      <h1>Order ID: {order?.id}</h1>
      {/* <h1>User: {order.user.username}</h1> */}
      <h1>Product Ordered: {order.products.name}</h1>
      <h1>Price: {order?.price}kr</h1>
      <h1>Order Date: {formattedDate}</h1>
      {/* <h1>Buyer notes: {order?.notes}</h1>
      <h1>Payment Method: {order.paymentMethod}</h1>
      <h1>Billing Address: {order.billingAddress}</h1>
      <h1>Payment Status: {order.paymentStatus}</h1>
  <h1>Order Status: {order.orderStatus}</h1> */}

      <br />

      <Link href={"/account/orders/" + order.id}>
        <button className="border-black border-2 dark:border-white px-5 rounded-full">
          View
        </button>
      </Link>
    </div>
  );
}
