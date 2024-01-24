import fetchJSON from "@/app/tools/FetchJson";
import GetAuthorizationToken from "@/app/tools/GetAuthorizationToken";
import useLoading from "@/app/tools/UseLoading";
import apiUrl from "@/app/tools/config";

export default function GetOrderById(id: string) {
  const token = GetAuthorizationToken();

  const { loading, error, response } = useLoading(
    async () =>
      await fetchJSON(`${apiUrl}/api/order/${id}`, {
        headers: {
          Authorization: `${token}`,
        },
      }),
  );

  return { loading, error, response };
}
