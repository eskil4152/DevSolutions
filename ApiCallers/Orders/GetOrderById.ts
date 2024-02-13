import fetchJSON from "@/app/tools/FetchJson";
import useLoading from "@/app/tools/UseLoading";
import apiUrl from "@/app/tools/config";

export default function GetOrderById(id: string) {
  const { loading, error, response } = useLoading(
    async () =>
      await fetchJSON(`${apiUrl}/api/order/${id}`, {
        credentials: "include",
      }),
  );

  return { loading, error, response };
}
