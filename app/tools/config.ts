const apiUrl =
  process.env.NODE_ENV === "production"
    ? "https://devsolutions-temp.com"
    : "https://localhost:8080";

export default apiUrl;
