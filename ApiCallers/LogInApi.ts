export default async function LogInAPI(username: string, password: string) {
  const apiUrl = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

  const data = await fetch(`${apiUrl}/api/login`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  return data;
}
