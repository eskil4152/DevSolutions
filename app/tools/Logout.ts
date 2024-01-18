export default function Logout() {
  if (typeof window !== "undefined") {
    return localStorage.removeItem("Authorization");
  }
}
