import apiUrl from "@/app/tools/config";
import { UserRoleChange } from "@/Enums/UserRoleChange";

export default async function ChangeRoleAPI(
  id: number,
  username: string,
  change: UserRoleChange,
) {
  const response = await fetch(`${apiUrl}/api/admin/roleChange`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
      username: username,
      change: change,
    }),
    credentials: "include",
  });

  if (response.status === 404) {
    throw new Error(`User not found`);
  } else if (response.status === 401 || response.status === 403) {
    throw new Error(`You are not authorized to change roles`);
  } else if (!response.ok) {
    throw new Error(`Failed to promote/demote user`);
  }

  return response;
}
