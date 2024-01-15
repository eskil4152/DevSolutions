export default async function Logout() {
  const data = await fetch("http://localhost:8080/api/logout", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  return data;
}
