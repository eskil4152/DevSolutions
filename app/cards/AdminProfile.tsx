import Link from "next/link";
import Logout from "../tools/Logout";

export default function AdminProfile({ data }: any) {
  return (
    <div className="container text-center">
      <div>
        <h1>ADMIN MODE</h1>
        <h1 className="text-5xl font-semibold uppercase p-4">
          {data.username}
        </h1>

        <h1 className="text-2xl pb-4">
          {data.firstname} {data.lastname}
        </h1>

        <div className="flex flex-col gap-3">
          <Link href="/admin/products">
            <button className="border-[1px] border-black px-16 py-2 rounded-full mt-2 dark:border-white">
              Change Available Products
            </button>
          </Link>
          <Link href="/admin/orders">
            <button className="border-[1px] border-black px-16 py-2 rounded-full mt-2 dark:border-white">
              Update Order Statuses
            </button>
          </Link>
          <Link href="/admin/mods">
            <button className="border-[1px] border-black px-16 py-2 rounded-full mt-2 dark:border-white">
              View Moderators
            </button>
          </Link>
          <Link href="/admin/users">
            <button className="border-[1px] border-black px-16 py-2 rounded-full mt-2 dark:border-white">
              View All Users
            </button>
          </Link>
          <Link href="/admin/faq">
            <button className="border-[1px] border-black px-16 py-2 rounded-full mt-2 dark:border-white">
              Change FAQ
            </button>
          </Link>
        </div>
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
            Logout();
            window.location.href = "/";
          }}
        >
          Log out
        </button>
      </div>
    </div>
  );
}
