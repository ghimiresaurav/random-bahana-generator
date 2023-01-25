import React from "react";
import ImageStrip from "./ImageStrip";
import Stack from "@mui/material/Stack";
import { MAX_IMAGES_ON_STRIP, MAX_STRIPS, images } from "../Data/maxCount";
import generateRandomImageLink from "../utils/generateRandomImageLink";
import getStripIndex from "../utils/getStripIndex";

const ImageStripContainer = () => {
  // Push 15 unique images to the array
  while (images.flat().length < MAX_IMAGES_ON_STRIP * MAX_STRIPS) {
    const stripIndex = getStripIndex(images.flat().length);
    while (images[stripIndex].length < MAX_IMAGES_ON_STRIP) {
      const imageLink = generateRandomImageLink();
      if (images.flat().indexOf(imageLink) === -1) {
        images[stripIndex].push(imageLink);
      }
    }
  }

  return (
    <Stack spacing={0.5}>
      {images.map((imageList, index) => (
        <ImageStrip images={imageList} key={index} index={index} />
      ))}
    </Stack>
  );
};

export default ImageStripContainer;
