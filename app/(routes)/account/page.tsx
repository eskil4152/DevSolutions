"use client";

import UserApi from "@/ApiCallers/UserApi";

export default function Account() {
  const { loading, error, data } = UserApi();

  while (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (data?.status === 200) {
    return (
      <div>
        <h2>
          Hello, {data.data.username}! Your role: {data.data.role}
        </h2>
        <p>{data.data.role == "ADMIN" ? "HEY" : "NO"}</p>
      </div>
    );
  } else if (data?.status === 404) {
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
