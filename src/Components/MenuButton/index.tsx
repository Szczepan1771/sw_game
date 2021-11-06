import React from "react";
import {ButtonProps, Button} from "@mui/material";
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles(() => ({
    button: {
        width: 400,
        color: "#FFE81F",
        borderColor: "#FFE81F",
        borderWidth: 3,
        fontSize: "2rem",
        padding: "10px 30px",
        margin: "30px 0",
        borderRadius: 10,
    }
}))

const MenuButton: React.FC<Omit<ButtonProps, "variant | size">> = (props) => {
    const c = useStyles()
    return (
        <Button
            className={c.button}
            size={"large"}
            variant={"outlined"}
            {...props}
        />
    )
}

export default MenuButton;