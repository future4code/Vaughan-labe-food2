import React from "react";
import styled from "styled-components";
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HeaderStyle = styled.header`
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

export default function Header(props){
    const navigate = useNavigate()

    return (
        <HeaderStyle>
            <ArrowBackIosNewRoundedIcon onClick={() => navigate(-1)} sx={{display:`${props.arrow}`, justifyContent: 'flex-start'}}/>
            <Typography variant="h1">{props.title}</Typography>
        </HeaderStyle>
    )
}