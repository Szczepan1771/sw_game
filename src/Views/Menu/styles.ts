import styled, {css} from "styled-components";
import {Box} from "@mui/material";

const MenuContainer = styled(Box)`
  ${({theme}) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: ${theme.black};
  `}
`

export {
    MenuContainer
}