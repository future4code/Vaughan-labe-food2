import React from 'react';
import blackLogo from "../../assets/blacklogo.png"
import { InitialPageContainer } from './Styled';


export default function InitialPage(){
    return(
        <InitialPageContainer>
            <img src={blackLogo} alt="Logo Future Eats" />
        </InitialPageContainer>
    )
}