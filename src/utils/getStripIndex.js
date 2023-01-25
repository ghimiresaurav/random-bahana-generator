import { MAX_IMAGES_ON_STRIP } from "../Data/maxCount";

const getStripIndex = (index) => {
  let stripIndex = 0;

  while (index > MAX_IMAGES_ON_STRIP - 1) {
    index -= MAX_IMAGES_ON_STRIP;
    stripIndex++;
  }

  return stripIndex;
};

export default getStripIndex;
