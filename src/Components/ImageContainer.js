import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const ImageContainer = (props) => {
  //   console.log(props);
  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        // border: "1px solid",
        // backgroundColor: "primary.dark",
        // "&:hover": {
        //   backgroundColor: "primary.main",
        //   opacity: [0.9, 0.8, 0.7],
        // },
      }}
    >
      <Paper
        sx={{
          //   width: 300,
          height: 300,
          border: "1px solid",
          backgroundImage: `url(${props.link})`,
          //   backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></Paper>
    </Box>
  );
};

export default ImageContainer;
