import Link from "next/link";
import toast from "react-hot-toast";

export default function AdminProfile({ data }: any) {
  return (
    <div className="container text-center relative">
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
  //Cookies.remove("Authentication", { path: "/", domain: "localhost" });
  // window.location.href = "/login";
};
