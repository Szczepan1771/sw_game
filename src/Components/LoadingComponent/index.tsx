import React from "react";
import {CircularProgress, Box} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(() => ({
    container: {
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000"
    }
}))

const LoadingComponent = () => {
    const c = useStyles()
    return (
        <Box className={c.container}>
            <CircularProgress style={{color: "#FFE81F"}} size={200}/>
        </Box>
    )
}

export default LoadingComponent