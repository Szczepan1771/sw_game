import React from "react";
import {Box} from "@mui/material";
import CustomButton from "../../Components/Button";
import {useNavigate} from "react-router-dom";
import {routes} from "../../utils/routes";
import GameBoard from "../../Components/GameBoard";
import BoardWrapper from "../../Components/BoardWrapper";

const PeopleBattle = () => {
    const navigation = useNavigate();

    return (
        <BoardWrapper>
            <CustomButton onClick={() => navigation(routes.menu)}>BACK</CustomButton>
            <GameBoard gameType={"people"}/>
        </BoardWrapper>
    )
}

export default PeopleBattle;