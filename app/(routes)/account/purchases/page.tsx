import PurchasesAPI from "@/ApiCallers/PurchasesAPI";

export default function Purchases() {
  const { loading, error, response } = PurchasesAPI();

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (response?.status === 200) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  } else if (response?.status === 403 || response?.status === 401) {
    return (
      <div>
        <h1>NOT ALLOWED</h1>
      </div>
    );
  } else if (error) {
    return (
      <div>
        <h1>Error occured: {error.message}</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Unknown error occured</h1>
      </div>
    );
  }
}
