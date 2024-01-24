export default function GetAuthorizationToken() {
  if (typeof window !== "undefined") {
    return localStorage.getItem("Authorization") || "";
  }
}
