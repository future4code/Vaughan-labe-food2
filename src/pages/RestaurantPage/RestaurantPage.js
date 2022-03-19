import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/URL'
import Header from '../../components/Header/Header';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import CardProducts from '../../components/CardProducts/CardProducts';
import { CircularProgress, Typography } from '@mui/material';
import { ProductsContainer, RestaurantContainer } from './Styled';
import useProtectedPage from '../../hooks/useProtectedPage';
import { GlobalContext } from '../../global/GlobalStateContext';

export default function RestaurantPage() {
  useProtectedPage()

  const { cart, setCart, productDetails, setProductDetails } = useContext(GlobalContext);

  useEffect(() =>{

    if(localStorage.getItem("cart")){
      
      setCart(JSON.parse(localStorage.getItem("cart")));
      setProductDetails(JSON.parse(localStorage.getItem("productDetails")));

    }
    
  },[])

  const params = useParams()

  const [data, loading] = useRequestData({}, `${BASE_URL}/restaurants/${params.id}`)

  const categoriesList = data.restaurant && data.restaurant.products.map((item) => {
    return item.category
  })

  const uniqueCategories = [...new Set(categoriesList)];

  const categories = uniqueCategories && uniqueCategories.map((category) => {

    return (
      <div key={category}>
        <Typography variant={'h5'} sx={{ width: '328px', m: 'auto', fontWeight: 'bold' }} color={'primary'}>{category}</Typography>
        {data.restaurant && data.restaurant.products.filter((item) => {
          return item.category === category
        }).map((item, index) => {
          return (
            <CardProducts
              key={item.name}
              img={item.photoUrl}
              name={item.name}
              price={item.price}
              description={item.description}
              id={item.id}
              position={index}
              shipping={data.restaurant.shipping}
              restaurantId={data.restaurant.id}
              restaurantAddress={data.restaurant.address}
              restaurantName={data.restaurant.name}
              deliveryTime={data.restaurant.deliveryTime}
            />
          )
        })}
      </div>

    )
  })


  return (
    <RestaurantContainer>
      <Header title={"Restaurante"} arrow={'inline'} logout={'none'} />
      {loading
        ? <CircularProgress sx={{ m: "40vh auto" }} />
        : <RestaurantCard restaurant={data.restaurant} display={'block'} height={'300px'} />
      }
      <ProductsContainer>
        {categories}
      </ProductsContainer>
    </RestaurantContainer>
  )
}