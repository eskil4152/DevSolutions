const apiUrl =
  process.env.NODE_ENV === "production"
    ? "http://34.149.51.81:8080/"
    : "http://localhost:8080";

export default apiUrl;
