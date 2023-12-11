export const Header = () => {
  return (
    <div className="flex justify-between items-center border-b-2 border-black p-4 relative">
      <div className="w-1/3">
        <h3 className="font-bold text-lg">DevSolutions</h3>
      </div>

      <div className="w-1/3 text-center">
        <h1>Products</h1>
      </div>

      <div className="w-1/3 text-right">
        <h1>Account</h1>
      </div>
    </div>
  );
};
