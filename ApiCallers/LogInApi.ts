export default async function LogInAPI(username: string, password: string) {
  const data = await fetch("http://localhost:8080/api/login", {
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
