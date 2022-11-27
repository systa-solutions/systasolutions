import React from "react";

import { OverView } from "../components/Overview";
import { CarouselComponent } from "../components/CarouselComponent";
import staffingJson from "../JsonData/staffing.json";

export const Staffing = () => {
  return (
    <>
      <CarouselComponent
        carouselData={staffingJson?.carousel}
        indicators={false}
        autoplay={false}
        height={"350px"}
      />
      <OverView title={"Staffing"} data={staffingJson.careers} />
    </>
  );
};
