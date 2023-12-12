import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex justify-between items-center border-b-2 border-black p-4 relative">
      <Link
        className="w-1/3"
        href={{
          pathname: "/",
        }}
      >
        <h3 className="font-bold text-lg">DevSolutions</h3>
      </Link>

      <Link
        className="w-1/3 text-center"
        href={{
          pathname: "/products",
        }}
      >
        <p>Products</p>
      </Link>

      <Link
        className="w-1/3 text-right"
        href={{
          pathname: "/account",
        }}
      >
        <p>Account</p>
      </Link>
    </div>
  );
};
