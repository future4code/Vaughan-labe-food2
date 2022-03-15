import React from 'react';
import { useParams } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/URL'
import Header from '../../components/Header/Header';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import CardProducts from './components/CardProducts';

export default function RestaurantPage() {

    const params = useParams()

    const [data, loading] = useRequestData({}, `${BASE_URL}/restaurants/${params.id}`)

    console.log(data.restaurant && data.restaurant.products)

    const categoriesList = data.restaurant && data.restaurant.products.map((item) =>{
        return item.category
    })

    const uniqueCategories = [...new Set(categoriesList)];

    // const categories = uniqueCategories && uniqueCategories.map((category) =>{

    //     return(
    //         <>
    //           <p>{category}</p>
    //           {data.restaurant && data.restaurant.products.filter((item) =>{
    //             if(item.category === category){
    //                 return <p>{item.name}</p>
    //             }
    //           })}
    //         </>
          
    //     )
    // })

    const renderCards = data.restaurant && data.restaurant.products.map((item) =>{
        return (
            <CardProducts 
            img={item.photoUrl}
            name={item.name}
            price={item.price}
            description={item.description}
            />
        )
    })

    return (
        <>
            <Header title={"Restaurante"} arrow={'inline'} />
            <RestaurantCard restaurant={data.restaurant} display={'block'} height={'300px'} />
            {/* {categories} */}   
            {renderCards}     
        </>
    )
}