import React, { useState, useContext} from 'react';
import { BASE_URL } from '../../constants/URL';
import useRequestData from '../../hooks/useRequestData';
import { ContainerRestaurantList, HomeContainer } from './Styled';
import Header from '../../components/Header/Header';
import SearchInput from '../../components/SearchInput/SearchInput';
import { goToSearch } from '../../routes/Coordinator';
import { useNavigate } from 'react-router-dom';
import Categories from './components/Categories';
import Footer from '../../components/Footer/Footer';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import { CircularProgress } from '@mui/material';
import useProtectedPage from "../../hooks/useProtectedPage";
import PopUp from '../../components/PopUp/PopUp';
import {GlobalContext} from '../../global/GlobalStateContext';

export default function HomePage() {
    useProtectedPage()

    const navigate = useNavigate()
    const [category, setCategory] = useState('')
    const [data2] = useRequestData({}, `${BASE_URL}/active-order`)
    const { setTimePopUp } = useContext(GlobalContext)

    if(data2.order != null || data2.order != undefined){
        setTimePopUp(true)
      } 

    const [data, loading] = useRequestData([], `${BASE_URL}/restaurants`);

    const {timePopUp} = useContext(GlobalContext)

    const restaurantsList = data.restaurants && data.restaurants
        .filter((restaurant) => {
            if (category === '') {
                return true
            }
            return category === restaurant.category
        })
        .map(restaurant => {
            return (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} display={'none'} height={' 218px'} />
            );
        });

    return (<HomeContainer>
        <Header title={'FutureEats'} arrow={'none'} logout={'none'} />
        <SearchInput onClick={() => goToSearch(navigate)} focus={false} />
        <Categories restaurantsList={data.restaurants} setCategory={setCategory} />
        <ContainerRestaurantList>
            {loading
                ? <CircularProgress sx={{ mt: "25vh" }} />
                : restaurantsList
            }
        </ContainerRestaurantList>   
        {!loading && timePopUp ? <PopUp/> : null}

        <Footer initialValue={0} />
    </HomeContainer>
    );
};