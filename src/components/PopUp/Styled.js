import styled from "styled-components";
import {primaryColor} from "../../constants/colors"

export const PopUpBox = styled.div`
    background-color: ${ primaryColor };
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    position: sticky;
    bottom: 56px;
    height: 118px;
`