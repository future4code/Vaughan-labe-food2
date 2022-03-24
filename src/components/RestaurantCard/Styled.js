import styled from "styled-components";
import { Card } from "@mui/material";

export const RestaurantCardStyled = styled(Card)`
  width: 328px;
  padding: 0 0 16px;
  margin: 8px auto 0;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  border-radius: 8px;

  h2 {
    margin: 12px 16px 10px;
    font-size: 16px;
    font-weight: bold;
  }

  img {
    width: 100%;
    height: 150px;
  }

  #info-delivery {
    margin: 8px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
