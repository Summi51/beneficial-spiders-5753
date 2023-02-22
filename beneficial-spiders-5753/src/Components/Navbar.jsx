import styles from './Navbar.module.css'
import React from 'react'
// import { BiCurrentLocation } from "@react-icons/all-files/fa/FaBeer"
import {NavLink} from 'react-router-dom'
import { Input } from '@chakra-ui/react'




const Navbar = () => {


  return (

    <>

    {/* Header */} 

      <div className={styles.container}>

        {/* left side */}

        <div className={styles.leftContainer}>
          <div style={{display:'flex'}}>

            {/* <BiCurrentLocation style={{ height: '40px', width: '40px', color: 'red' }} /> */}

            <span style={{color:'white'}}>Your Store:&nbsp;&nbsp;</span>
            <NavLink to='/' style={{color:'white'}}>
            <p>Sams Shopping Center</p>
            </NavLink>

          </div>

          <div>
            <p>Catalog Quick Order</p>
          </div>

          <div style={{justifyContent:'flex-start'}}>
            <p>Order By Phone 1-877-530-TREE</p>
            <a style={{color:'white', paddingRight:'70px' , lineHeight:'30px'}} href='(Call Center Hours)'>(Call Center 
              Hours)</a>
          </div>
        </div>

        {/* right side */}

        <div className={styles.rightContainer}>
              <div>
                <p style={{color:'white', paddingLeft:'70px'}}>Same-Day Delivery</p>
              </div>
              <div>
                <p style={{color:'white'}}>Track Orders</p>
              </div>
              <div>
                <img width={'100%'} src='https://www.dollartree.com/ccstore/v1/images/?source=/file/general/shop_family_dollar.png&height=30&width=193' alt=''/>
              </div>
        </div>


        {/* container end part */}
      </div>




{/* Navbar */}


<div className='containerNavbar'>

  <div>
    <img src='https://www.dollartree.com/file/general/DT-Logo-Regular.svg' alt=''/>
  </div>

  <div>
    <Input placeholder='Search Prod Factory' />
  </div>

  <div className='containerPlus'>
    <div>
      <NavLink to='/'>
        <p>Shop</p>
      </NavLink>
    </div>

    <div>
      <img src='https://www.dollartree.com/file/general/dt_plus_pdp_plp_200x70.png' alt=''/>
    </div>

    <div></div>

    <div></div>
  </div>
</div>


    </>
  )




}

export default Navbar
