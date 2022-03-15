import { Typography } from '@mui/material';
import React from 'react';
import { BASE_URL } from '../../constants/URL';
import useRequestData from '../../hooks/useRequestData';
import { HomeContainer, RestaurantCard } from './Styled';
import Header from '../../components/header/Header';
import SearchInput from '../../components/SearchInput/SearchInput';
import { goToSearch } from '../../routes/Coordinator';
import { useNavigate } from 'react-router-dom';

export default function HomePage(){
    const navigate = useNavigate()

    const [data, loading] = useRequestData([], `${BASE_URL}/restaurants`);
    console.log(data.restaurants);
    const restaurantsList = data.restaurants && data.restaurants.map(restaurant => {
        return (
            <RestaurantCard key={restaurant.id}>
                <img src={restaurant.logoUrl} alt="Imagem da logo" />
                <Typography variant="h2" color="primary" >{restaurant.name}</Typography>
                <div>
                    <Typography variant='p' color="secondary">{restaurant.deliveryTime} min</Typography>
                    <Typography variant='p' color="secondary">Frete R${restaurant.shipping},00</Typography>
                </div>
            </RestaurantCard>);
    });

    return(<HomeContainer>
        <Header title={'FutureEats'} arrow={'none'}/>
        <SearchInput onClick={() => goToSearch(navigate)} />
        {restaurantsList}
        </HomeContainer>
    );
};