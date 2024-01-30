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
    <div
      className="border-2 border-black dark:border-white p-2 flex flex-col
      items-center min-h-[50vh] w-[25vw] mx-2 relative"
      key={product.id}
    >
      <p>{name}</p>
      <p>{description}</p>
      <p>NOK {parseInt(String(price)).toLocaleString()}</p>

      <div className="bottom-0 w-[100%] absolute">
        <Link href={"/products/" + id}>
          <button className="border-2 border-black dark:border-white px-2 mb-2 py-1 rounded-md">
            View more
          </button>
        </Link>
      </div>
    </div>
  );
}
