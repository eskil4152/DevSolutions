import Cookies from "js-cookie";
import Link from "next/link";
import toast from "react-hot-toast";

export default function UserProfile({ data }: any) {
  // data.[firstname, lastname, username, email, role]

  return (
    <div className="container text-center relative">
      <div>
        <h1 className="text-5xl font-semibold uppercase p-4">
          {data.username}
        </h1>

        <h1 className="text-2xl pb-4">
          {data.firstname} {data.lastname}
        </h1>

        <Link href="/account/purchases">
          <button className="border-[1px] border-black px-16 py-2 rounded-full mt-2 dark:border-white">
            Show All Purchases
          </button>
        </Link>
      </div>

      <div className="bottom-0 absolute w-full">
        <button
          className="border-2 border-black rounded-full mb-2 px-2 dark:border-white"
          onClick={() => {
            toast.success("HELLO");
          }}
        >
          Change profile information
        </button>
        <br />
        <button
          className="border-2 border-black rounded-full mb-2 px-2 dark:border-white"
          onClick={() => {
            toast.error("Not working yet");
          }}
        >
          Log out (not working)
        </button>
      </div>
    </div>
  );
}

// Logout will not work as cookie is HTTPonly
// Not sure what to do
const handleLogout = () => {
  Cookies.remove("Authentication", { path: "/", domain: "localhost" });

  // window.location.href = "/login";
};
