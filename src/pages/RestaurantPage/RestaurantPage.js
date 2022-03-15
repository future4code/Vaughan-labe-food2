import React from 'react';
import { useParams } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/URL'
import Header from '../../components/Header/Header';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';

export default function RestaurantPage() {

    const params = useParams()

    const [data, loading] = useRequestData({}, `${BASE_URL}/restaurants/${params.id}`)
    console.log(data)
    return (
        <>
            <Header title={"Restaurante"} arrow={'inline'} />
            <RestaurantCard restaurant={data.restaurant} display={'inline'} height={'260px'} />
        </>
    )
}