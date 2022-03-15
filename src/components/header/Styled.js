import styled from "styled-components";

export const HeaderStyle = styled.header`
    width: 100vw;
    height: 44px;
    margin: 0 0 0px;
    padding-top: 13px;
    padding-bottom: 12px;
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
    justify-items: center;

    h1{
        font-size: 16px;
        text-align: center;
    }

    div{
        justify-self:flex-start;
    }
`