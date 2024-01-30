interface TypeProps {
  product: ProductType | undefined;
}

export default function ProductAdmin({ product }: TypeProps) {
  if (!product) {
    return null;
  }

  const { id, name } = product;

  return (
    <div
      className="border-2 border-black dark:border-white p-2 flex flex-col items-center"
      key={product.id}
    >
      <p>Product id:</p>
      <p>{id}</p>

      <div className="my-2" />

      <p>Product name:</p>
      <p>{name}</p>

      <div className="h-1 w-[50%] bg-black dark:bg-white my-2" />
    </div>
  );
}
