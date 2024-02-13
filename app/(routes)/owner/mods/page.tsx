"use client";

import { useState } from "react";
import ChangeRoleAPI from "@/ApiCallers/Admin/ChangeRoleAPI";
import { UserRoleChange } from "@/Enums/UserRoleChange";
import GetAllModeratorsAPI from "@/ApiCallers/Admin/GetAllModeratorsAPI";

export default function OwnerMods() {
  const { loading, error, response } = GetAllModeratorsAPI();

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [userToChange, setUserToChange] = useState<UserType | null>(null);
  const [action, setAction] = useState<UserRoleChange | null>(null);
  const [changeError, setChangeError] = useState("");

  function handlePromoteClick(user: UserType) {
    setUserToChange(user);
    setShowConfirmation(true);
  }

  function handleConfirmPromote(id: number, username: string) {
    try {
      ChangeRoleAPI(id, username, action!);
      setShowConfirmation(false);
    } catch (e) {
      setChangeError("Failed to change user role - " + e);
    }
  }

  function handleCancelPromote() {
    setShowConfirmation(false);
  }

  while (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (response?.status === 200) {
    return (
      <div className="text-center p-5">
        {response.data[0] == null ? (
          <h1>No people</h1>
        ) : (
          response.data.map((user: UserType) => (
            <div key={user.id} className="py-4">
              <h1>{user.id}</h1>
              <h1>
                {user.firstname} {user.lastname}
              </h1>
              <h1>{user.email}</h1>
              <button
                onClick={() => {
                  handlePromoteClick(user);
                  setAction(UserRoleChange.PROMOTE);
                }}
              >
                PROMOTE
              </button>
              <button
                onClick={() => {
                  handlePromoteClick(user);
                  setAction(UserRoleChange.DEMOTE);
                }}
              >
                DEMOTE
              </button>
            </div>
          ))
        )}

        {showConfirmation && (
          <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4">
              <p>{`Are you sure you want to promote '${userToChange?.username}' to moderator?`}</p>
              <div className="flex gap-2 justify-center">
                <button
                  onClick={() => {
                    userToChange != null
                      ? handleConfirmPromote(
                          userToChange.id,
                          userToChange.username,
                        )
                      : setChangeError("Unable to promote, user not found");
                  }}
                  className="font-semibold"
                >
                  Confirm
                </button>

                <p> | </p>

                <button
                  onClick={handleCancelPromote}
                  className="font-semibold "
                >
                  Cancel
                </button>
              </div>
              <p>{changeError}</p>
            </div>
          </div>
        )}
      </div>
    );
  } else if (response?.status === 401 || response?.status === 403) {
    return (
      <div>
        <h1>You are not authorized to see this page</h1>
      </div>
    );
  } else if (error) {
    return (
      <div>
        <h1>Error occurred: {error.message}</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Unknown error occurred</h1>
      </div>
    );
  }
}
