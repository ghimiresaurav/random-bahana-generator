import React from "react";
import { Box, Container } from "@mui/material";
import MainModal from "./MainModal";

const Wrapper = () => {
  return (
    <Container>
      <Box
        sx={{
          backgroundColor: "transparent",
          height: "100vh",
          width: "100vw",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MainModal />
      </Box>
    </Container>
  );
};

export default Wrapper;
