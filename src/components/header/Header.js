import React from "react";
import { HeaderStyle } from './Styled'
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Header(props) {
  const navigate = useNavigate()

  return (
    <HeaderStyle>
      <ArrowBackIosNewRoundedIcon onClick={() => navigate(-1)} sx={{ display: `${props.arrow}`, justifyContent: 'flex-start' }} />
      <Typography variant="h1">{props.title}</Typography>
    </HeaderStyle>
  )
}