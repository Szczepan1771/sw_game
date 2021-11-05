import React from "react";
import { CircularProgress, Box } from "@mui/material";
import { theme } from "../../utils/theme";

const LoadingComponent = () => {
  return (
    <Box
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.black
      }}
    >
      <CircularProgress
        size={200}
        style={{
          color: theme.primaryYellow
        }}
      />
    </Box>
  )
}

export default LoadingComponent