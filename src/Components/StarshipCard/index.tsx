import React from "react";
import {Box, Typography} from "@mui/material";
import {StarshipObjectType} from "../../types";

const StarshipCard: React.FC<StarshipObjectType> = (props) => {
    const {crew, model, name} = props;
    return (
        <Box>
            <Typography variant={"h5"}>
                Name: {name}
            </Typography>
            <Typography variant={"h6"}>
                Model: {model}
            </Typography>
            <Typography variant={"h5"}>
                Power(crew): {crew}
            </Typography>
        </Box>
    )
}

export default StarshipCard