import fetchJSON from "@/app/tools/FetchJson";
import GetFromStorage from "@/app/tools/GetFromStorage";
import useLoading from "@/app/tools/UseLoading";
import apiUrl from "@/app/tools/config";

export default function GetOrderById(id: string) {
  const token = GetFromStorage();

  const { loading, error, response } = useLoading(
    async () =>
      await fetchJSON(`${apiUrl}/api/order/${id}`, {
        headers: {
          Authorization: `${token}`,
        },
      })
  );

  return { loading, error, response };
}
