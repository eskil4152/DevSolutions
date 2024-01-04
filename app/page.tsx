"use client";

import ServicePreview from "./cards/ServicePreview";
import GetFromAPI from "./tools/GetFromAPI";

export default function Home() {
  const data = GetFromAPI("https://api.github.com/users/eskil4152/repos");

  if (data?.status === 200) {
    return (
      <div>
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
