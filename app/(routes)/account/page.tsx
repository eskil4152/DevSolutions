"use client";

import UserApi from "@/ApiCallers/UserApi";

export default function Account() {
  const data = UserApi();
  console.log(data?.data);

  if (data?.status === 200) {
    return (
      <div>
        <h2>
          Hello, {data.data.username}! Your role: {data.data.role}
        </h2>
      </div>
    );
  } else if (!data?.status) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        <p>Error</p>
      </div>
    );
  }
}
