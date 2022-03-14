import styled from "styled-components";
import { Card } from '@mui/material';

export const RestaurantCard = styled(Card)`
    width: 328px;
    height: 188px;
    padding: 0 0 16px;
    margin: 8px auto 0;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
    border-radius: 8px;

    h2 {
        margin: 12px 16px 4px;
        font-size: 16px;
    }

    img {
        width: 100%;
        height: 70%;
    }

    div {
        margin: 0 16px 16px 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
            margin: 0;
        }
    }
`
