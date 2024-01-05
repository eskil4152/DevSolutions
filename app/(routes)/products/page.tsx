"use client";

import ServicePreview from "@/app/cards/ServicePreview";
import GetProducts from "@/app/tools/GetFromAPI";

export default function Products() {
  var data = GetProducts();

  if (data?.status === 200) {
    return (
      <div>
        <h1>This is the products page.</h1>
        <p>
          Here all our products and services will be shown in clickable cards.
        </p>
        <p>The cards will contain a short description, as well as prices.</p>
        <h1>SERVICES: </h1>
        <div id="projects" className="grid grid-rows-2 grid-cols-4 gap-20">
          {data.data.map((service: ServiceType) => (
            <div className="">
              <ServicePreview service={service} key={service.id} />
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
