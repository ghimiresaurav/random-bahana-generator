import React from "react";
import { Box, Container } from "@mui/material";

const Wrapper = () => {
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
          opacity: 0.4,
        }}
      ></Box>
    </Container>
  );
};

export default Wrapper;
