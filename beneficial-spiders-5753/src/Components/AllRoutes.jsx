import {Routes, Route} from 'react-router-dom'
import AllDepartments from '../Pages/AllDepartments'
import HolidaysSeasonsCelebrations from '../Pages/HolidaysSeasonsCelebrations'
import ToysCrafts from '../Pages/ToysCrafts'
import KitchenHomeDecor from '../Pages/KitchenHomeDecor'
import HealthPersonalCare from '../Pages/HealthPersonalCare'
import FoodCandyDrinks from '../Pages/FoodCandyDrinks'
import ValentineCrafts from '../Pages/ValentineCrafts'
import SingleKitchenHomeDecor from '../Pages/SingleKitchenHomeDecor'
import Home from '../Pages/Home'
import React from 'react'
import Login from './Login'
import Cart from '../Pages/Cart'


const AllRoutes = () => {
  return (
    <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/all_departments' element={<AllDepartments/>}/>
        <Route path='/holidays_seasons_celebrations' element={<HolidaysSeasonsCelebrations/>}/>
        <Route path='/toys_crafts' element={<ToysCrafts/>}/>

        <Route path='/kitchen_home_decor' element={<KitchenHomeDecor/>}/>
        <Route path='/kitchen_home_decor/:id' element={<SingleKitchenHomeDecor/>}/>
        
        <Route path='/health_personal_care' element={<HealthPersonalCare/>}/>
        <Route path='/food_candy_drinks' element={<FoodCandyDrinks/>}/>
        <Route path='/valentine_crafts' element={<ValentineCrafts/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
    </Routes>
  )
}

export default AllRoutes
