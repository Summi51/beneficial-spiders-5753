import {Routes, Route} from 'react-router-dom'
import AllDepartments from '../Pages/AllDepartments'
import HolidaysSeasonsCelebrations from '../Pages/HolidaysSeasonsCelebrations'
import ToysCrafts from '../Pages/ToysCrafts'
import KitchenHomeDecor from '../Pages/KitchenHomeDecor'
import HomeOffice from '../Pages/HomeOffice'
import HealthPersonalCare from '../Pages/HealthPersonalCare'
import FoodCandyDrinks from '../Pages/FoodCandyDrinks'
import React from 'react'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/all_departments' element={<AllDepartments/>}/>
        <Route path='/holidays_seasons_celebrations' element={<HolidaysSeasonsCelebrations/>}/>
        <Route path='/toys_crafts' element={<ToysCrafts/>}/>
        <Route path='/kitchen_home_decor' element={<KitchenHomeDecor/>}/>
        <Route path='/home_office' element={<HomeOffice/>}/>
        <Route path='/health_personal_care' element={<HealthPersonalCare/>}/>
        <Route path='/food_candy_drinks' element={<FoodCandyDrinks/>}/>
    </Routes>
  )
}

export default AllRoutes
