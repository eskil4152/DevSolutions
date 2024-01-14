export default function OrdersCard({ data }: any) {
  const orderDate = new Date(data.orderDate);
  const formattedDate = orderDate.toLocaleDateString("en-GB");

  return (
    <div className="p-2 border-[1px] border-black dark:border-white">
      <h1>Order ID: {data.id}</h1>
      <h1>User: {data.user.username}</h1>
      <h1>Product Ordered: {data.products.name}</h1>
      <h1>Price: {data.price}kr</h1>
      <h1>Order Date: {formattedDate}</h1>
      <h1>Buyer notes: {data.notes}</h1>
      <h1>Payment Method: {data.paymentMethod}</h1>
      <h1>Billing Address: {data.billingAddress}</h1>
      <h1>Payment Status: {data.paymentStatus}</h1>
      <h1>Order Status: {data.orderStatus}</h1>
    </div>
  );
}
