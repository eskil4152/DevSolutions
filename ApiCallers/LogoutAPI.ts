export default async function Logout() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const data = await fetch(`${apiUrl}/api/logout`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  return data;
}
