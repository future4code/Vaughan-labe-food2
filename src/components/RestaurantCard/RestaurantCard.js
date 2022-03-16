import React from 'react'
import { RestaurantCardStyled } from './Styled'
import { goToRestaurant } from '../../routes/Coordinator'
import { Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function RestaurantCard({ restaurant, display, height }) {
    const navigate = useNavigate()

    return (
        <>
            {restaurant &&
                <RestaurantCardStyled key={restaurant.id} onClick={() => goToRestaurant(navigate, restaurant.id)} sx={{ minHeight: `${height}` }}>
                    <img src={restaurant.logoUrl} alt={`Logomarca do ${restaurant.name}`} />
                    <Typography variant="h2" color="primary">{restaurant.name}</Typography>
                    <div>
                        <Typography color="secondary" sx={{ display: `${display}`, m: "0 16px 0 16px" }}>{restaurant.category}</Typography>
                        <div id='info-delivery'>
                            <Typography color="secondary">{restaurant.deliveryTime} min</Typography>
                            <Typography color="secondary">Frete R${restaurant.shipping},00</Typography>
                        </div>
                        <Typography color="secondary" sx={{ display: `${display}`, m: "8px 16px 0 16px" }}>{restaurant.address}</Typography>
                    </div>
                </RestaurantCardStyled>
            }
        </>
    )
}