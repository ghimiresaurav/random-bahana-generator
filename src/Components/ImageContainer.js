import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const ImageContainer = (props) => {
  return (
    <Box
      sx={{
        width: 213,
        height: 170,
        // backgroundColor: "primary.dark",
        // "&:hover": {
        //   backgroundColor: "primary.main",
        //   opacity: [0.9, 0.8, 0.7],
        // },
      }}
    >
      <Paper
        sx={{
          height: 170,
          border: "1px solid",
          backgroundImage: `url(${props.link})`,
          backgroundSize: "cover",
        }}
      ></Paper>
    </Box>
  );
};

export default ImageContainer;
