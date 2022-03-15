import styled from "styled-components";

export const HeaderStyle = styled.header`
    width: 100vw;
    height: 30px;
    margin: 0 0 16px 0;
    padding-top: 13px;
    padding-bottom: 12px;
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
    justify-items: center;
    align-items: center;
    box-shadow: 0px 2px 5px gray;

    h1{
        font-size: 16px;
        text-align: center;
        grid-area: 1/2/2/3;
        font-weight: bold;
    }

    div{
        justify-self:flex-start;
    }
`