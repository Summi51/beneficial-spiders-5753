import styles from './Navbar.module.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
// import {BsSearch} from '@chakra-ui/icons'
import { FaRegUser, FaCartArrowDown, FaBookOpen, FaStopwatch, FaBorderAll } from 'react-icons/fa'
import Logo from '../Image/final_logo.png'
import { TiLocation } from 'react-icons/ti'
import { Search2Icon } from '@chakra-ui/icons'

const AllData = [

   { path: '/all_departments', title: 'All Departments' },
   { path: '/holidays_seasons_celebrations', title: 'Holidays, Seasons & Celebrations' },
   { path: '/toys_crafts', title: 'Toys & Crafts' },
   { path: '/kitchen_home_decor', title: 'Kitchen & Home Decor' },
   { path: '/health_personal_care', title: 'Health & Personal Care' },
   { path: '/food_candy_drinks', title: 'Food, Candy & Drinks' },
   { path: '/valentine_crafts', title: 'Valentine Crafts' },

]


const Navbar = () => {

   return (

      <>

         {/* Header */}

         <div className={styles.container}>

            {/* left side */}

            <div className={styles.leftContainer}>
               <div style={{ display: 'flex' }}>

                  <TiLocation style={{ color: 'white', height: '14px', fontSize: '25px' }} />
                     <span style={{ color: 'white' }}>Your Store:&nbsp;&nbsp;</span>
                     <NavLink to='/' style={{ color: 'white' }}>
                        <p>Sams Shopping Center</p>
                     </NavLink>
               </div>

               <div style={{ display: 'flex', justifyContent: "space-evenly" }}>
                  <FaBookOpen style={{ color: 'white', height: '14px', marginRight: '10px' }} />
                  <p>Catalog Quick Order</p>
               </div>

               <div style={{ justifyContent: 'flex-start' }}>
                  <p>Order By Phone 1-877-530-TREE</p>
                  <a style={{ color: 'white', paddingRight: '70px', lineHeight: '30px' }}
                      href='(Call Center Hours)'>(Call Center
                     Hours)
                  </a>
               </div>
            </div>

            {/* right side */}

            <div className={styles.rightContainer}>
               <div style={{ display: 'flex' }}>
                  <FaStopwatch style={{ color: 'white', marginRight: '12px' }} />
                  <p style={{ color: 'white' }}>Same-Day Delivery</p>
               </div>

               <div style={{ display: 'flex' }}>
                  <FaBorderAll style={{ color: 'white', marginRight: '12px' }} />
                  <p style={{ color: 'white' }}>Track Orders</p>
               </div>
               <div>
                  <img width={'100%'}
                     src='https://www.dollartree.com/ccstore/v1/images/?source=/file/general/shop_family_dollar.png&height=30&width=193' alt='' />
               </div>
            </div>


            {/* container end part */}

         </div>

         {/* Navbar */}

         <div className={styles.containerNavbar}>

            <div style={{}}>
               <img style={{ width: '230px', marginRight: '200px', marginTop: 'auto' }} src={Logo} alt='' />
            </div>

            <div
               style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: "center"
               }}
            >
               <input placeholder='   Search Prod Factory' style={{
                  width: '100%', height: '35px', marginTop: '47px', borderRadius: '1px', border: '1px solid grey'
               }} 
            />
               <Search2Icon mt='12' ml='-6' />
            </div>


            {/* Chakra Ui input search */}

            <div className={styles.containerPlus}>

               <div>
                  <NavLink to='/' style={{ color: 'black', textDecoration: 'none', marginTop: '40px' }}>
                     <p>Shop</p>
                  </NavLink>
               </div>

            <div style={{ width: '90px', height: '70px' }}>
                  <img src='https://www.dollartree.com/file/general/dt_plus_pdp_plp_200x70.png' alt=''
                     style={{ marginTop: '40px' }} />
            </div>

            <div>
                  <NavLink to='/'>
                     <FaRegUser style={{ height: '100px', width: '21px', color: 'green' }} />
                  </NavLink>
            </div>

            <div>
                  <NavLink to='/'>
                     <FaCartArrowDown style={{ height: '100px', width: '25px', color: 'green' }} />
                  </NavLink>
            </div>

            </div>
            </div>
         <div className={styles.navDiv} style={{}}>
            {
               AllData.map((item) => (
                  <NavLink to={item.path} style={{ textDecoration: 'none', color: 'black' }}>
                     <p className={styles.navDropdown}>
                        {item.title}
                     </p>
                  </NavLink>
               ))
            }
         </div>

      {/* Drop Down Navbar */}
      </>
   )
}

export default Navbar



