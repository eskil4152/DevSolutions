import apiUrl from "@/app/tools/config";

export default async function Logout() {
  const data = await fetch(`${apiUrl}/api/logout`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  return data;
}
