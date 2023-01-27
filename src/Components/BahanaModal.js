import React, { useContext, useState } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import GlobalContext from "../contexts/GlobalContext";

const BahanaModal = (props) => {
  const { showBahanaModal, setShowBahanaModal, setSuccess, isMobile } =
    useContext(GlobalContext);
  const [showExplanation, setShowExplanation] = useState(false);

  const goBack = () => {
    setShowBahanaModal(false);
    setShowExplanation(false);
    setSuccess(false);
  };

  const explain = () => {
    setShowExplanation(true);
    const audio_success = new Audio("./audios/success.mp3");
    audio_success.play();
  };

  return (
    <Box
      sx={{
        height: isMobile ? 400 : 250,
        width: isMobile ? 300 : 500,
        padding: 2,
        border: "3px solid #f0f",
        visibility: showBahanaModal ? "visible" : "hidden",
        opacity: showBahanaModal ? 1 : 0,
        borderRadius: 10,
        position: "absolute",
        display: "inherit",
        alignItems: "inherit",
        flexDirection: "column",
        justifyContent: "space-around",
        color: "#fff",
      }}
    >
      <>
        <Typography variant="h5" component="h5" sx={{ padding: 3 }}>
          {props.bahana.description}
        </Typography>
        <Typography variant="h6" component="h6" sx={{ padding: 3 }}>
          {showExplanation ? props.bahana.explanation : "..."}
        </Typography>
      </>
      <Stack direction={isMobile ? "column" : "row"} spacing={2}>
        <Button
          variant="contained"
          sx={{
            width: 200,
            height: 45,
            borderRadius: 3,
            backgroundColor: "#f0f",
            ":hover": { backgroundColor: "#fff", color: "#f0f" },
          }}
          onClick={explain}
          disabled={showExplanation}
        >
          Show Explanation
        </Button>

        <Button
          variant="outlined"
          sx={{
            width: 200,
            height: 45,
            borderRadius: 3,
            color: "#f0f",
            border: "2px solid #fff",
          }}
          onClick={goBack}
        >
          Back
        </Button>
      </Stack>
    </Box>
  );
};

export default BahanaModal;
