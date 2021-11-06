import React, {useState, useEffect} from "react";
import {Box, Modal, Typography} from "@mui/material";
import {PeopleObjectType, StarshipObjectType, StoreKeyType, WinnerType} from "../../types";
import BoardSection from "../BoardSection";
import {useStore} from "../../Context";
import PersonCard from "../PersonCard";
import StarshipCard from "../StarshipCard";
import {selectWinner} from "../../utils";
import CustomButton from "../Button";

type GameBoardProps = {
    gameType: StoreKeyType
}

type CardProps = {
    name: string,
    mass?: string,
    birth_year?: string;
    model?: string
    crew?: string
}

const Card: React.FC<CardProps> = (props) => {
    const {name, mass, birth_year, model, crew} = props;
    if (mass && birth_year) {
        return (
            <PersonCard name={name} mass={mass} birth_year={birth_year}/>
        )
    }
    if (crew && model) {
        return <StarshipCard name={name} crew={crew} model={model}/>
    }
    return null
}

const GameBoard: React.FC<GameBoardProps> = ({gameType}) => {
    const store = useStore();
    const gameStoreLength = store[gameType].length - 1;

    const [firstPlayer, setFirstPlayer] = useState<number | null>(null);
    const [secondPlayer, setSecondPlayer] = useState<number | null>(null);

    const [firstPlayerScore, setFirstPlayerScore] = useState(() => 0);
    const [secondPlayerScore, setSecondPlayerScore] = useState(() => 0);

    const [winner, setWinner] = useState<WinnerType | null>(null);

    const cardProps = (index: number) => store[gameType][index];

    const handleClose = () => {
        setWinner(null);
        setFirstPlayer(null);
        setSecondPlayer(null);
    }

    useEffect(() => {
        if (firstPlayer !== null && secondPlayer !== null) {
            const firstObject = cardProps(firstPlayer);
            const secondObject = cardProps(secondPlayer);

            const firstValue = (firstObject as PeopleObjectType).mass ? (firstObject as PeopleObjectType).mass : (firstObject as StarshipObjectType).crew;
            const secondValue = (secondObject as PeopleObjectType).mass ? (secondObject as PeopleObjectType).mass : (secondObject as StarshipObjectType).crew;

            const winner = selectWinner(firstValue, secondValue);
            setWinner(winner);

            if (winner === "first_player") return setFirstPlayerScore(prev => prev + 1);
            if (winner === "second_player") return setSecondPlayerScore(prev => prev + 1);
        }
    }, [firstPlayer, secondPlayer])

    return (
        <Box style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "80vw",
            height: "80vh",
            backgroundColor: "#000"
        }}>
            <BoardSection
                side={"left"}
                number={firstPlayer}
                selectNumber={setFirstPlayer}
                points={firstPlayerScore}
                gameStoreLength={gameStoreLength}
                card={firstPlayer !== null ? <Card {...cardProps(firstPlayer)}/> : null}
            />
            <BoardSection
                side={"right"}
                number={secondPlayer}
                selectNumber={setSecondPlayer}
                points={secondPlayerScore}
                gameStoreLength={gameStoreLength}
                card={secondPlayer !== null ? <Card {...cardProps(secondPlayer)}/> : null}
            />
            <Modal
                open={winner !== null}
                onClose={handleClose}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Box
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        width: 500,
                        height: 200,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 10,
                        backgroundColor: "blue"
                    }}
                >
                    {winner !== "draw" && <Typography variant={"h5"}>Congratulations!!</Typography>}
                    <Typography variant={"h6"}>{winner !== "draw" ? `The winner is ${winner}!!!` : "Draw"}</Typography>
                    <CustomButton onClick={handleClose}>Next round</CustomButton>
                </Box>
            </Modal>
        </Box>
    )
}

export default GameBoard