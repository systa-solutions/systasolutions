import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import "../styles/carousel.css";

export const CarouselComponent = ({
  carouselData,
  indicators,
  autoplay,
  height,
}) => {
  return (
    <div className="carousel-comp">
      <Fade arrows={false} indicators={indicators} autoplay={autoplay}>
        {carouselData?.map((element, index) => (
          <div className="each-slide-effect" key={index}>
            <div
              style={{
                height: `${height}`,
              }}
            >
              <img src={element.src} alt={"img"} />
              {/* <span>{element.title}</span> */}
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};
