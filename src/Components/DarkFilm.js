import React, { useContext } from "react";
import { Box, Container } from "@mui/material";
import GlobalContext from "../contexts/GlobalContext";
import generateRandomNumber from "../utils/generateRandomNumber";

const DarkFilm = () => {
  const { thinking, success, isMobile } = useContext(GlobalContext);
  const thinkingImage = `./images/thinking/${generateRandomNumber(0, 3)}.jpg`;
  const successImage = `./images/hooray/${generateRandomNumber(
    isMobile ? 1 : 0,
    7
  )}.jpg`;
  return (
    <Container>
      <Box
        sx={{
          bgcolor: "#000",
          height: "100vh",
          width: "100vw",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 10,
          opacity: thinking || success ? 1 : 0.4,
          backgroundImage: thinking
            ? `url(${thinkingImage})`
            : success
            ? `url(${successImage})`
            : "none",
          backgroundSize: "cover",
        }}
      ></Box>
    </Container>
  );
};

export default DarkFilm;
