import Logout from "@/ApiCallers/LogoutAPI";
import Link from "next/link";
import { useState } from "react";
import toast, { useToaster } from "react-hot-toast";

export default function UserProfile({ data }: any) {
  // data.[firstname, lastname, username, email, role]
  const [error, setError] = useState("");

  async function handleLogout() {
    const data = await Logout();

    if (data.status !== 200) {
      setError("An error occured when attempting to log out, please try again");
    }

    setError("");
    window.location.href = "/";
  }

  return (
    <div className="container text-center relative">
      <div>
        <h1 className="text-5xl font-semibold uppercase p-4">
          {data.username}
        </h1>

        <h1 className="text-2xl pb-4">
          {data.firstname} {data.lastname}
        </h1>

        <Link href="/account/orders">
          <button className="border-[1px] border-black px-16 py-2 rounded-full mt-2 dark:border-white">
            Show All Purchases
          </button>
        </Link>
      </div>

      <div className="bottom-0 absolute w-full">
        <Link href={"/account/update"}>
          <button className="border-2 border-black rounded-full mb-2 px-2 dark:border-white">
            Change profile information
          </button>
        </Link>

        <br />

        <button
          className="border-2 border-black rounded-full mb-2 px-2 dark:border-white"
          onClick={() => {
            handleLogout();
          }}
        >
          Log out
        </button>
        <p>{error}</p>
      </div>
    </div>
  );
}
