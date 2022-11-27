import React from "react";

import { CarouselComponent } from "../components/CarouselComponent";
import { ContactInfo } from "../components/ContactInfo";
import contactusJson from "../JsonData/contactus.json";

export const ContactUs = () => {
  return (
    <>
      <CarouselComponent
        carouselData={contactusJson?.carousel}
        indicators={false}
        autoplay={false}
        height={"350px"}
      />
      <ContactInfo title={"Contact us"} data={contactusJson.data} />
    </>
  );
};
