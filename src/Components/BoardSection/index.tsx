import React from "react";
import {Box, Typography} from "@mui/material";
import CustomButton from "../Button";
import {getRandomNumber} from "../../utils";

type BoardSectionType = {
    side: "left" | "right",
    points: number,
    gameStoreLength: number,
    number: number | null,
    selectNumber: React.Dispatch<number>,
    card: JSX.Element | null,
}

const BoardSection: React.FC<BoardSectionType> = (props) => {
    const {card, side, points, selectNumber, number, gameStoreLength} = props;

    const handleClick = () => {
        const number = getRandomNumber(gameStoreLength);
        selectNumber(number)
    }

    return (
        <Box style={{
            display: "flex",
            flexDirection: "column",
            width: "45%",
            height: "100%",
            border: "1px solid black",
            backgroundColor: "#002395"
        }}>
            <Typography variant={"h3"}>{points}</Typography>
            <CustomButton
                disabled={number !== null}
                onClick={handleClick}
            >
                Select card
            </CustomButton>
            {card}
        </Box>
    )
}

export default BoardSection;