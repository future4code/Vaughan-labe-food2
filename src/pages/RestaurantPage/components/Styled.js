import { Card } from '@mui/material'
import styled from 'styled-components'
import { primaryColor } from '../../../constants/colors'

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
      margin: 1px 0 0 5%;
  }

  #info-title {
    width: 180px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #quantity-product {
    border: thin solid ${primaryColor};
    padding: 0 8px;
    border-radius: 4px;
  }
`