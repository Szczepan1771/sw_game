import React from "react";
import {Box, Typography} from "@mui/material";
import {PeopleObjectType} from "../../types";

const PersonCard: React.FC<PeopleObjectType> = (props) => {
    const {mass, birth_year, name} = props;
    return (
        <Box>
            <Typography variant={"h5"}>
                Name: {name}
            </Typography>
            <Typography variant={"h6"}>
                Birth year: {birth_year}
            </Typography>
            <Typography variant={"h5"}>
                Power(mass): {mass}
            </Typography>
        </Box>
    )
}

export default PersonCard;