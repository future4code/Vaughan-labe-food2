import React from "react";
import { HeaderStyle } from './Styled'
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { goToLogin } from '../../routes/Coordinator'

export default function Header(props) {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('cart')
    localStorage.removeItem('productDetails')
    goToLogin(navigate)
  }

  return (
    <HeaderStyle>
      <ArrowBackIosNewRoundedIcon onClick={() => navigate(-1)} sx={{ display: `${props.arrow}`, justifyContent: 'flex-start' }} />
      <Typography variant="h1">{props.title}</Typography>
      <ExitToAppIcon onClick={logout} sx={{ display: `${props.logout}`, gridArea: '1/3/2/4' }} />
    </HeaderStyle>
  )
}