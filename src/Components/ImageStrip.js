import React from "react";
import ImageContainer from "./ImageContainer";
import Stack from "@mui/material/Stack";
import Marquee from "react-fast-marquee";
import { speeds, delays } from "../Data/marquee";

const ImageStrip = (props) => {
  return (
    <Marquee
      // Alternating direction
      direction={props.index % 2 == 0 ? "right" : "left"}
      pauseOnClick={true}
      gradient={false}
      delay={delays[props.index % 3]}
      speed={speeds[props.index % 3]}
    >
      <Stack direction="row" spacing={0.5}>
        {props.images.map((image) => (
          <ImageContainer link={image} />
        ))}
      </Stack>
    </Marquee>
  );
};

export default ImageStrip;
