const apiUrl =
  process.env.NODE_ENV === "production"
    ? "https://server-aste32wdra-nw.a.run.app"
    : "http://localhost:8080";

export default apiUrl;
