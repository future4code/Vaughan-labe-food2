import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import CartPage from "../pages/CartPage/CartPage";
import CreateAddressPage from "../pages/CreateAddressPage/CreateAddressPage";
import EditAddressPage from "../pages/EditAddressPage/EditAddressPage";
import EditUserPage from "../pages/EditUserPage/EditUserPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import RestaurantPage from "../pages/RestaurantPage/RestaurantPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import SearchPage from "../pages/SearchPage/SearchPage";



export default function Router(){
    return(
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/createaddress" element={<CreateAddressPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/editaddress" element={<EditAddressPage />} />
              <Route path="/edituser" element={<EditUserPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/restaurant/:id" element={<RestaurantPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
    )
}