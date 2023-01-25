import bahanas from "../Data/bahanas";
import generateRandomNumber from "./generateRandomNumber";

const getRandomBahana = () => {
  const randomNumber = generateRandomNumber(0, bahanas.length - 1);
  return bahanas[randomNumber];
};

export default getRandomBahana;
