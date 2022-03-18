import { Card } from '@mui/material'
import styled from 'styled-components'
import { primaryColor } from '../../constants/colors'

export const CardContainer = styled(Card)`
  display: flex;
  width: 328px;
  min-height: 112px;
  border: 1px solid gray;
  border-radius: 10px;
  margin: 2% auto;

  img{
      min-width: 120px;
      max-width: 120px;
      max-height: 112px;
      object-fit: cover;
  }

  div{
      margin: 0 0 0 5%;
  }

  #quantity-product {
    border: thin solid ${primaryColor};
    padding: 0 8px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const InfoProductBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 33px;
  grid-template-rows: 33px 1fr 1fr;
`

export const DialogBox = styled.div`
  grid-area: 3/2/4/4;
  justify-self: end;
  align-self: end;
`