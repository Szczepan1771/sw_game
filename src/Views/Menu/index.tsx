import React from "react";
import LoadingComponent from "../../Components/LoadingComponent";
import {Box} from "@mui/material";
import MenuButton from "../../Components/MenuButton";
import {useGlobalFetch} from "../../utils/hooks";
import {useNavigate} from "react-router-dom";
import {routes} from "../../utils/routes";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(() => ({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#000"
    }
}))

const Menu = () => {
    const c = useStyles()
    const navigate = useNavigate();
    const {
        isLoading,
        starshipsError,
        peopleError
    } = useGlobalFetch();

    const handleNavigate = (route: string) => {
        navigate(route)
    }

    if (isLoading) {
        return <LoadingComponent/>
    }

    if (!!starshipsError && !!peopleError) {
        return (
            <div>
                Error
            </div>
        )
    }

    return (
        <Box className={c.container}>
            <MenuButton
                onClick={() => handleNavigate(routes.people)}
                disabled={!!peopleError}
            >
                PEOPLE BATTLE
            </MenuButton>
            <MenuButton
                onClick={() => handleNavigate(routes.starships)}
                disabled={!!starshipsError}
            >
                STARSHIP BATTLE
            </MenuButton>
        </Box>
    )
}

export default Menu;