import React from "react";
import {routes} from "../../utils/routes";
import CustomButton from "../../Components/Button";
import {useNavigate} from "react-router-dom";
import GameBoard from "../../Components/GameBoard";
import BoardWrapper from "../../Components/BoardWrapper";

const StarshipsBattle = () => {
    const navigation = useNavigate()
    return (
        <BoardWrapper>
            <CustomButton onClick={() => navigation(routes.menu)}>BACK</CustomButton>
            <GameBoard gameType={"starships"}/>
        </BoardWrapper>
    )
}

export default StarshipsBattle