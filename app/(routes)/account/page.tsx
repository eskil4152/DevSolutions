"use client";

import UserApi from "@/ApiCallers/User/UserApi";
import AdminProfile from "@/app/cards/AdminProfile";
import React from "react";
import OwnerProfile from "@/app/cards/OwnerProfile";
import UserProfile from "@/app/cards/UserProfile";

export default function Account() {
  const { loading, error, response } = UserApi();

  while (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (response?.status === 200) {
    return (
      <div className="">
        {response.data.role === "OWNER" ? (
          <OwnerProfile data={response.data} />
        ) : response.data.role === "ADMIN" ? (
          <AdminProfile data={response.data} />
        ) : (
          <UserProfile data={response.data} />
        )}
      </div>
    );
  } else if (
    response?.status === 401 ||
    response?.status === 403 ||
    response?.status === 404
  ) {
    return (
      <div>
        <h1>You do not have an account, or you are not logged in</h1>
      </div>
    );
  } else if (error) {
    return (
      <div>
        <h1>Error: {error.message}</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Error: Unknown error occured</h1>
      </div>
    );
  }
}
