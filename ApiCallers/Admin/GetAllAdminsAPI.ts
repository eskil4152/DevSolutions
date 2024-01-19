'use client'

import fetchJSON from "@/app/tools/FetchJson";
import GetFromStorage from "@/app/tools/GetFromStorage";
import useLoading from "@/app/tools/UseLoading";
import apiUrl from "@/app/tools/config";

export default function GetAllModeratorsAPI(){
	const hasToken = GetFromStorage();

	const { loading, error, response } = useLoading(
		async () =>
      await fetchJSON(`${apiUrl}/api/admin/mods`, {
		  method: "GET",
		  headers: {
			  "Content-Type": "application/json",
			  Authorization: `${hasToken}`,
		  },
		  credentials: "include",
	  }));

	return { loading, error, response };
}