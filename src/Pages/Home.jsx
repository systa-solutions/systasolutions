import React from "react";

import { InfoComponent } from "../components/InfoComponent";
import { CarouselComponent } from "../components/CarouselComponent";
import homeCarouselJson from "../JsonData/home.json";

export const Home = () => {
  return (
    <>
      <CarouselComponent
        carouselData={homeCarouselJson.carousel}
        indicators={true}
        autoplay={true}
        height={"400px"}
      />
      <InfoComponent infoData={homeCarouselJson.infoData} />
    </>
  );
};
