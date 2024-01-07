"use client";

import GetFaq from "@/ApiCallers/GetFaqApi";

export default function Faq() {
  var data = GetFaq();

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
  } else if (!data?.status) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <div>
        <p style={{ color: "red" }}>{data?.status}Unknown error occured</p>
      </div>
    );
  }
}
