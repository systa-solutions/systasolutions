import React from "react";

import { OverView } from "../components/Overview";
import { CarouselComponent } from "../components/CarouselComponent";
import whoWeAreJson from "../JsonData/careers.json";

export const Careers = () => {
  return (
    <>
      <CarouselComponent
        carouselData={whoWeAreJson?.carousel}
        indicators={false}
        autoplay={false}
        height={"350px"}
      />
      <OverView title={"Careers"} data={whoWeAreJson.careers} />
    </>
  );
};
