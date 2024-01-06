async function postJSON(url: string, options?: RequestInit) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  const data = await response.json();
  const status = response.status;

  return { status, data };
}

export default postJSON;
