"use client";

import ServicePreview from "@/app/cards/ServicePreview";
import GetProducts from "@/ApiCallers/GetProductsAPI";

export default function Products() {
  var data = GetProducts();

  if (data?.status === 200) {
    return (
      <div className="text-center">
        <h1 className="text-2xl font-semibold mt-5">SERVICES: </h1>
        <div
          id="projects"
          className="grid grid-rows-2 grid-cols-2 gap-20 px-[15vw] my-5"
        >
          {data.data.map((service: ServiceType) => (
            <ServicePreview service={service} key={service.id} />
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
