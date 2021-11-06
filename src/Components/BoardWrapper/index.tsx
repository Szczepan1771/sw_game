import React from "react";
import {Box} from "@mui/material";

const BoardWrapper: React.FC = ({children}) => {
    return (
        <Box style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            height: "100vh",
            backgroundColor: "#000"
        }}>
            {children}
        </Box>
    )
}

export default BoardWrapper;