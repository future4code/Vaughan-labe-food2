import React from 'react';
import { Typography } from '@mui/material';
import cheeseburger from "../../assets/cheeseburger.png"
import { ErrorContainer } from './Styled';

export default function ErrorPage() {
    return (
        <ErrorContainer>
            <img src={cheeseburger} alt="Ícone hambuger" />
            <Typography color='white' sx={{ mt: '30px' }}>Página não encontrada</Typography>
        </ErrorContainer>
    )
}