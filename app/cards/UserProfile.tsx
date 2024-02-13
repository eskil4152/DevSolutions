import Link from "next/link";
import LogOutApi from "@/ApiCallers/User/LogOutApi";

export default function UserProfile({ data }: any) {
  // data.[firstname, lastname, username, email, role]

  return (
    <div className="container text-center">
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
        <Link href={{ pathname: "/account/update", query: { ...data } }}>
          <button className="border-2 border-black rounded-full mb-2 px-2 dark:border-white">
            Change profile information (501)
          </button>
        </Link>

        <br />

        <button
          className="border-2 border-black rounded-full mb-2 px-2 dark:border-white"
          onClick={() => {
            LogOutApi();
            window.location.href = "/";
          }}
        >
          Log out
        </button>
      </div>
    </div>
  );
}
