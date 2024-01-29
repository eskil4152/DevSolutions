import Link from "next/link";

interface TypeProps {
  product: ProductType | undefined;
}

export default function ProductPreview({ product }: TypeProps) {
  if (!product) {
    return null;
  }

  const { id, name, description, price } = product;

  return (
    <div className="border-2 border-black dark:border-white p-2 flex flex-col items-center">
      <p>{name}</p>
      <p>{description}</p>
      <p>NOK {parseInt(String(price)).toLocaleString()}</p>

      <div className="h-1 w-[50%] bg-black dark:bg-white my-2" />

      <Link href={"/products/" + id}>
        <button>View more</button>
      </Link>
    </div>
  );
}
