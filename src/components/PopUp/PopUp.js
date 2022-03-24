import React, { useContext } from 'react';
import useRequestData from '../../hooks/useRequestData';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import { BASE_URL } from '../../constants/URL';
import { Typography } from '@mui/material';
import { PopUpBox } from './Styled';
import { GlobalContext } from '../../global/GlobalStateContext'

export default function PopUp() {

  const [data] = useRequestData({}, `${BASE_URL}/active-order`)
  const { setTimePopUp } = useContext(GlobalContext)


//   if (data.order === null) {
//     setTimePopUp(false)
//   }
   
  // if(data.order != null || data.order != undefined){
  //   setTimePopUp(true)
  // } 

  return (
    <PopUpBox>
      <AccessTimeOutlinedIcon color='white' sx={{ mr: '24px', width: '50px', height: '50px' }} />
      <div>
        <Typography>Pedido em andamento</Typography>
        <Typography>{data.order && data.order.restaurantName}</Typography>
        <Typography sx={{ fontWeight: 'bold' }}>Total: R$ {data.order && data.order.totalPrice.toFixed(2).replace('.', ',')}</Typography>
      </div>
    </PopUpBox>
  )
}
