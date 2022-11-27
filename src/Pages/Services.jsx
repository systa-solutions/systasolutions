import React from "react";

import { OverView } from "../components/Overview";
import { CarouselComponent } from "../components/CarouselComponent";
import servicesJson from "../JsonData/services.json";

export const Services = () => {
  return (
    <>
      <CarouselComponent
        carouselData={servicesJson?.carousel}
        indicators={false}
        autoplay={false}
        height={"350px"}
      />
      <OverView title={"Services"} data={servicesJson.services} />
    </>
  );
};
