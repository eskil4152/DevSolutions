export default function Account() {
  return (
    <div className="text-center ">
      <h1 className="text-xl font-semibold mt-2">Log In / Register</h1>

      <input
        type="text"
        id="username"
        width={10}
        height={5}
        placeholder="Username / Email"
        className="border-2 border-black my-2"
      />

      <br />

      <input
        type="text"
        id="username"
        width={10}
        height={5}
        placeholder="Password"
        className="border-2 border-black my-2"
      />

      <br />

      <button className="border-2 border-black px-4 rounded-full">
        Log In / Register
      </button>
    </div>
  );
}
