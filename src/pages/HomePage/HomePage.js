import React from 'react';
import { BASE_URL } from '../../constants/URL';
import useRequestData from '../../hooks/useRequestData';


export default function HomePage(){
    const [data, loading] = useRequestData([], `${BASE_URL}/restaurants`)
    console.log(data.restaurants)
    const restaurantsList = data.restaurants && data.restaurants.map(restaurant => {
        return <p key={restaurant.id}>{restaurant.name}</p>

    })
    return(<div>
        <h1>HomePage</h1>
        {restaurantsList}
        </div>
    )
}