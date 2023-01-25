import directories from "../Data/directories";
import generateRandomNumber from "./generateRandomNumber";

const generateRandomImageLink = () => {
  // Select a directory randomly from the list of directories
  const directory =
    directories[generateRandomNumber(0, directories.length - 1)];
  // Select a random image from the selected directory
  const imageIndex = generateRandomNumber(0, directory.max);
  // Generate the link for the selected image
  const imageLink = `./images/${directory.name}/${imageIndex}.jpg`;

  return imageLink;
};

export default generateRandomImageLink;
