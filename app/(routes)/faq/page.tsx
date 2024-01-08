"use client";

import GetFaq from "@/ApiCallers/GetFaqApi";

export default function Faq() {
  const { loading, error, data } = GetFaq();

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
        <h1 className="p-2">Frequently Asked Questions: </h1>
        <div>
          {data.data.map((question: FaqType) => (
            <div className="p-2">
              <p>{question.question}</p>
              <p>{question.answer}</p>
            </div>
          ))}
        </div>
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
        <p style={{ color: "red" }}>Error: Unknown error occured</p>
      </div>
    );
  }
}
