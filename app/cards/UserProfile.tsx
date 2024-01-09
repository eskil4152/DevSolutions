export default function UserProfile({ data }: any) {
  return (
    <div>
      <h1>
        Hello, {data.firstname} {data.lastname}, aka {data.username}! You are a{" "}
        {data.role}!
      </h1>
      <p>{data.email}</p>
    </div>
  );
}
