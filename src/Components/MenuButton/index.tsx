import React from "react";
import { Button, ButtonProps } from "@mui/material";
import {theme} from "../../utils/theme";

const MenuButton: React.FC<Omit<ButtonProps, "variant | size">> = (props) => {
  return (
    <Button
      style={{
        color: theme.primaryYellow,
        borderColor: theme.primaryYellow,
        fontSize: 24,
        width: 400,
        padding: "10px 30px",
        margin: "30px 0"
      }}
      size={"large"}
      variant={"outlined"}
      {...props}
    />
  )
}

export default MenuButton;