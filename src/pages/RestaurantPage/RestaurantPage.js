import React from 'react';
import { useParams } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/URL'
import Header from '../../components/Header/Header';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import CardProducts from './components/CardProducts';
import { Typography } from '@mui/material';
import { ProductsContainer } from './Styled';

export default function RestaurantPage() {

    const params = useParams()

    const [data] = useRequestData({}, `${BASE_URL}/restaurants/${params.id}`)

    const categoriesList = data.restaurant && data.restaurant.products.map((item) =>{
        return item.category
    })

    const uniqueCategories = [...new Set(categoriesList)];

    const categories = uniqueCategories && uniqueCategories.map((category) =>{

        return(
            <div key={category}>
              <Typography variant={'h5'} sx={{width: '328px', m: 'auto', fontWeight: 'bold'}} color={'primary'}>{category}</Typography>
              {data.restaurant && data.restaurant.products.filter((item) =>{
                return item.category === category          
              }).map((item) => {
                  return(
                    <CardProducts 
                    img={item.photoUrl}
                    name={item.name}
                    price={item.price}
                    description={item.description}
                    />
                  )
              })}
            </div>
          
        )
    })


    return (
        <>
            <Header title={"Restaurante"} arrow={'inline'} />
            <RestaurantCard restaurant={data.restaurant} display={'block'} height={'300px'} />
            <ProductsContainer>
              {categories}   
            </ProductsContainer>           
        </>
    )
}