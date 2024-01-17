export default function GetFromStorage() {
  if (typeof window !== "undefined") {
    return localStorage.getItem("Authorization") || "";
  }
}
