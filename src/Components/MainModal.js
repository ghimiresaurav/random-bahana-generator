import React, { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
import { Box, Typography, Button } from "@mui/material";
import BahanaModal from "./BahanaModal";

const MainModal = () => {
  const { showBahanaModal, setShowBahanaModal } = useContext(GlobalContext);

  const func = () => {
    const audio_soab = new Audio("./audios/soab.mp3");
    // audio_soab.play();
    setShowBahanaModal(true);
  };

  return (
    <Box
      sx={{
        visibility: !showBahanaModal ? "visible" : "hidden",
        opacity: !showBahanaModal ? 1 : 0,
        height: 250,
        width: 500,
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
        Need a bahana again?
      </Typography>
      <Typography variant="h5" component="h5">
        No problem. I've got you!
      </Typography>
      <Typography variant="h6" component="h6">
        PS: I am not on tinder.
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
        onClick={func}
      >
        Generate Random Bahana
      </Button>
      <BahanaModal />
    </Box>
  );
};

export default MainModal;
