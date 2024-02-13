import apiUrl from "@/app/tools/config";

export default async function LogOutApi() {
  try {
    const response = await fetch(`${apiUrl}/api/logout`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (response.ok) {
      console.log("Logout successful");
    } else {
      console.error("Logout failed:", response.status);
    }
  } catch (error) {
    console.error("Error during logout:", error);
  }
}
