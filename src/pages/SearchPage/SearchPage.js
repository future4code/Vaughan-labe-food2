
import { Typography } from '@mui/material';
import React from 'react';
import Header from '../../components/Header/Header';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import SearchInput from '../../components/SearchInput/SearchInput';
import { BASE_URL } from '../../constants/URL';
import useForm from '../../hooks/useForm';
import useProtectedPage from '../../hooks/useProtectedPage';
import useRequestData from '../../hooks/useRequestData';
import { HomeContainer } from '../HomePage/Styled';

export default function SearchPage() {
    useProtectedPage()

    const [data] = useRequestData([], `${BASE_URL}/restaurants`);
    const [form, handleInputChange] = useForm('');

    const restaurantsListFilter = data.restaurants && data.restaurants
        .filter((restaurant) => {

            let newName = restaurant.name.toUpperCase();
            let newSearch = form.searching && form.searching.toUpperCase();

            return newName.includes(newSearch)
        })
        .map(restaurant => {
            return (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} display={'none'} height={' 218px'} />
            );
        });

    return (
        <HomeContainer>
            <Header title={'Busca'} arrow={'inline'} logout={'none'} />
            <SearchInput
                onClick={null}
                focus={true}
                handleInputChange={handleInputChange} />
            {form.searching ? restaurantsListFilter : <Typography variant={'h6'} >Busque por nome de restaurantes</Typography>}
        </HomeContainer>
    )
}