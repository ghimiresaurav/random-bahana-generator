import React, { useContext } from "react";
import { Box, Typography, Button } from "@mui/material";
import GlobalContext from "../contexts/GlobalContext";

const BahanaModal = () => {
  const { showBahanaModal, setShowBahanaModal } = useContext(GlobalContext);
  return (
    <Box
      sx={{
        height: 400,
        width: 700,
        visibility: showBahanaModal ? "visible" : "hidden",
        opacity: showBahanaModal ? 1 : 0,
        // border: "3px solid cyan",
        borderRadius: 10,
        position: "absolute",
        backgroundColor: "cyan",
        opacity: 0.7,

        display: "inherit",
        alignItems: "inherit",
        flexDirection: "column",
        justifyContent: "space-around",
        color: "#000",
      }}
    >
      <Typography variant="h4" component="h4">
        asfadsf
      </Typography>
      <Typography variant="h5" component="h5">
        No problem. I've got you!
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
        // onClick={func}
      >
        Generate Random Bahana
      </Button>
    </Box>
  );
};

export default BahanaModal;
