import Link from "next/link";

interface TypeProps {
  order: OrderType | undefined;
}

export default function OrderPreview({ order }: TypeProps) {
  if (!order) {
    return null;
  }

  const { id, productName, price, orderDate } = order;
  const formattedDate = new Date(orderDate).toLocaleDateString("en-GB");

  return (
    <div className="border-2 border-black dark:border-white flex flex-col items-center px-10 py-4">
      <p>{productName}</p>
      <p>{formattedDate}</p>
      <p>NOK {price}kr</p>

      <div className="h-1 w-[50%] bg-black dark:bg-white my-2" />

      <Link href={"/account/orders/" + id}>
        <button>View Order</button>
      </Link>
    </div>
  );
}
