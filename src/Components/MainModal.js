import React, { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
import { Box, Typography, Button } from "@mui/material";
import BahanaModal from "./BahanaModal";
import getRandomBahana from "../utils/getBahana";

const MainModal = () => {
  const {
    showBahanaModal,
    setShowBahanaModal,
    thinking,
    setThinking,
    setSuccess,
    isMobile,
  } = useContext(GlobalContext);

  const generate = () => {
    const audio_soab = new Audio("./audios/soab.mp3");
    const audio_wtf = new Audio("./audios/wtf.mp3");
    const audio_success = new Audio("./audios/success.mp3");
    audio_soab.play();

    setTimeout(() => setThinking(true), 100);
    setTimeout(() => audio_wtf.play(), 3000);

    setTimeout(() => {
      setShowBahanaModal(true);
      setThinking(false);
      setSuccess(true);
      audio_success.play();
    }, 6000);
  };

  return (
    <>
      <Box
        sx={{
          visibility: !showBahanaModal ? "visible" : "hidden",
          opacity: !showBahanaModal ? 1 : 0,
          height: isMobile ? 400 : 250,
          width: isMobile ? 300 : 500,
          border: "3px solid red",
          borderRadius: 10,
          display: "inherit",
          alignItems: "inherit",
          flexDirection: "column",
          justifyContent: "space-around",
          color: "#fff",
        }}
      >
        <Typography variant="h4" component="h4">
          {thinking ? "Wait" : "Need a bahana again?"}
        </Typography>
        <Typography variant="h5" component="h5">
          {thinking ? "Wait" : "No problem. I've got you!"}
        </Typography>
        <Typography variant="h6" component="h6">
          {thinking ? "I am thinking..." : "PS: I am not on tinder."}
        </Typography>
        <Button
          variant="contained"
          sx={{
            width: 250,
            height: 50,
            borderRadius: 3,
            backgroundColor: "#f0f",
            ":hover": { backgroundColor: "#fff", color: "#f0f" },
          }}
          onClick={generate}
          disabled={thinking}
        >
          Generate Random Bahana
        </Button>
      </Box>
      <BahanaModal bahana={getRandomBahana()} />
    </>
  );
};

export default MainModal;
