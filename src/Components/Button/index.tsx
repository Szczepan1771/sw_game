import React from "react";
import { Button, ButtonProps } from '@mui/material';

const CustomButton: React.FC<Omit<ButtonProps, "variant">> = (props) => {
  return (
    <Button
      {...props}
      variant={"contained"}
    />
  )
}

export default CustomButton;