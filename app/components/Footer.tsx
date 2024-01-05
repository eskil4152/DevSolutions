import Link from "next/link";

export default function Footer() {
  return (
    <div id="footer" className="bottom-0 border-t-2 py-2 pl-4 border-black">
      <Link
        href={{
          pathname: "/about",
        }}
      >
        <h3 className="font-bold text-lg">About Us</h3>
      </Link>
      <ul>
        <li>FAQ</li>
        <li>Customer Service</li>
      </ul>
    </div>
  );
}
