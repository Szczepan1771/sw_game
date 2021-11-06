import React from "react";
import { Button, ButtonProps } from '@mui/material';

const CustomButton: React.FC<Omit<ButtonProps, "variant">> = (props) => {
  return (
    <Button
        style={{
          color: "#000",
          backgroundColor: "#FFE81F",
          borderColor: "#000",
          borderWidth: 2
        }}
      {...props}
      variant={"contained"}
    />
  )
}

export default CustomButton;