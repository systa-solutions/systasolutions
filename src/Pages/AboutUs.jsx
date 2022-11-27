import React from "react";

import { OverView } from "../components/Overview";
import { CarouselComponent } from "../components/CarouselComponent";
import aboutus from "../JsonData/aboutus.json";

export const AboutUs = () => {
  return (
    <>
      <CarouselComponent
        carouselData={aboutus?.carousel}
        indicators={false}
        autoplay={false}
        height={"350px"}
      />
      <OverView title={"About us"} data={aboutus.data} />
    </>
  );
};
