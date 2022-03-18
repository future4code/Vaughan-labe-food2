import styled from "styled-components"

export const ErrorContainer = styled.div`
    background-color: black;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    img {
       width: 126px;
       height: 65px;
       object-fit: contain;
       filter: invert(95%) sepia(0%) saturate(0%) hue-rotate(182deg) brightness(105%) contrast(105%);
       margin-bottom: 30px;
    }
`