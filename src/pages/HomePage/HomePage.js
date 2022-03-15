import React, { useState } from 'react';
import { BASE_URL } from '../../constants/URL';
import useRequestData from '../../hooks/useRequestData';
import { HomeContainer } from './Styled';
import Header from '../../components/Header/Header';
import SearchInput from '../../components/SearchInput/SearchInput';
import { goToSearch } from '../../routes/Coordinator';
import { useNavigate } from 'react-router-dom';
import Categories from './components/Categories';
import Footer from '../../components/Footer/Footer';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';

export default function HomePage() {
    const navigate = useNavigate()
    const [category, setCategory] = useState('')

    const [data, loading] = useRequestData([], `${BASE_URL}/restaurants`);
    const restaurantsList = data.restaurants && data.restaurants
        .filter((restaurant) => {
            if (category === '') {
                return true
            }
            return category === restaurant.category
        })
        .map(restaurant => {
            return (
                <RestaurantCard restaurant={restaurant} display={'none'} height={' 218px'} />
            );
        });

    return (<HomeContainer>
        <Header title={'FutureEats'} arrow={'inline'} />
        <SearchInput onClick={() => goToSearch(navigate)} />
        <Categories restaurantsList={data.restaurants} setCategory={setCategory} />
        {restaurantsList}
        <Footer initialValue={0} />
    </HomeContainer>
    );
};