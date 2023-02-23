import styles from './Navbar.module.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Box, Image, Flex, Button, VStack} from '@chakra-ui/react'
// import {BsSearch} from '@chakra-ui/icons'
import { FaRegUser, FaCartArrowDown, FaBookOpen, FaStopwatch, FaBorderAll } from 'react-icons/fa'
import Logo from '../Image/final_logo.png'
import { TiLocation } from 'react-icons/ti'


const AllData = [

   { path: '/all_departments', title: 'All Departments' },
   { path: '/holidays_seasons_celebrations', title: 'Holidays, Seasons & Celebrations' },
   { path: '/toys_crafts', title: 'Toys & Crafts' },
   { path: '/kitchen_home_decor', title: 'Kitchen & Home Decor' },
   { path: '/home_office', title: 'Home & Office' },
   { path: '/health_personal_care', title: 'Health & Personal Care' },
   { path: '/food_candy_drinks', title: 'Food, Candy & Drinks' }

]


const Navbar = () => {

   return (

      <>

         {/* Header */}

         <div className={styles.container}>

            {/* left side */}

            <div className={styles.leftContainer}>
               <div style={{ display: 'flex' }}>

                  {/* <BiCurrentLocation style={{ height: '40px', width: '40px', color: 'red' }} /> */}
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
                  <a style={{ color: 'white', paddingRight: '70px', lineHeight: '30px' }} href='(Call Center Hours)'>(Call Center
                     Hours)</a>
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
                  <img width={'100%'} src='https://www.dollartree.com/ccstore/v1/images/?source=/file/general/shop_family_dollar.png&height=30&width=193' alt='' />
               </div>
            </div>


            {/* container end part */}
         </div>




         {/* Navbar */}


         <div className={styles.containerNavbar}>

            <div style={{}}>
               <img style={{ width: '230px', marginRight: '200px', marginTop: 'auto' }} src={Logo} alt='' />
            </div>

            <div>
               <input placeholder='   Search Prod Factory' style={{
                  width: '100%', height: '35px', marginTop: '47px', borderRadius: '1px', border: '1px solid grey'
               }}></input>
            </div>


{/* Chakra Ui input search */}

            {/* <Input
              type="text"
              placeholder="Find something famous for you"
              h="50px"
              w="18rem"
              color="black"
            />
            <BsSearch
            style={{marginLeft:"-1.5rem"}}
            /> */}


            <div className={styles.containerPlus}>

               <div>
                  <NavLink to='/' style={{ color: 'black', textDecoration: 'none', marginTop: '40px' }}>
                     <p>Shop</p>
                  </NavLink>
               </div>

               <div style={{ width: '90px', height: '70px' }}>
                  <img src='https://www.dollartree.com/file/general/dt_plus_pdp_plp_200x70.png' alt='' style={{ marginTop: '40px' }} />
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



         {/* Drop Down Navbar */}

         <div className={styles.navDiv}  style={{  }}>
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
         


         {/* Image Slider 1 */}
         
         <NavLink>
         <Box m='auto' w='90%' mt={10}>
            <Image src='https://www.dollartree.com/file/general/w_hero_st_patricks_day_1250x400_20230130.jpg' />
         </Box>
         </NavLink>


        <div className={styles.shopFinds}>
         <h1>Shop Thrilling Finds</h1>
        </div>

            {/* fetch part */}

       <div className={styles.gridShopFields}>
            <div>
            <img src='https://www.dollartree.com/file/general/w_tf_easter_craft_supplies_200x200_20230129.jpg' alt=''/>
            <a href='Easter Craft Supplies' className={styles.gridShopFieldsHover}>Easter Craft Supplies</a>
            </div>
            <div>
            <img src='https://www.dollartree.com/file/general/w_tf_easter_baskets_buckets_pails_200x200_20230129.jpg' alt=''/>
            <a href='Easter Baskets, Buckets & Pails' className={styles.gridShopFieldsHover}>Easter Baskets, Buckets & Pails</a>
            </div>
            <div>
            <img src='https://www.dollartree.com/file/general/w_tf_easter_decor_200x200_20230129.jpg' alt=''/>
            <a href='Easter Decor' className={styles.gridShopFieldsHover}>Easter Decor</a>
            </div>
            <div>
            <img src='https://www.dollartree.com/file/general/w_tf_vases_containers_200x200_20230129.jpg' alt=''/>
            <a href='Vases & Containers' className={styles.gridShopFieldsHover}>Vases & Containers</a>
            </div>
            <div>
            <img src='https://www.dollartree.com/file/general/w_tf_storage_organization_200x200_20230129.jpg' alt=''/>
            <a href='Storage & Organization' className={styles.gridShopFieldsHover}>Storage & Organization</a>
            </div>
            <div>
            <img src='https://www.dollartree.com/file/general/w_tf_catering_supplies_200x200_20230129.jpg' alt=''/>
            <a href='Catering Supplies' className={styles.gridShopFieldsHover}>Catering Supplies</a>
            </div>
            <div>
            <img src='https://www.dollartree.com/file/general/w_tf_books_200x200_20230129.jpg' alt=''/>
            <a href='Books' className={styles.gridShopFieldsHover}>Books</a>
            </div>
            <div>
            <img src='https://www.dollartree.com/file/general/w_tf_health_beauty_supplies_200x200_20230129.jpg' alt=''/>
            <a href='Health & Beauty Supplies' className={styles.gridShopFieldsHover}>Health & Beauty Supplies</a>
            </div>
            <div>
            <img src='https://www.dollartree.com/file/general/w_tf_gardening_supplies_200x200_20230129.jpg' alt=''/>
            <a href='Gardening Supplies' className={styles.gridShopFieldsHover}>Gardening Supplies</a>
            </div>
            <div>
            <img src='https://www.dollartree.com/file/general/w_tf_office_supplies_200x200_20230129.jpg' alt=''/>
            <a href='Office Supplies' className={styles.gridShopFieldsHover}>Office Supplies</a>
            </div>
            <div>
            <img src='https://www.dollartree.com/file/general/w_tf_blank_crafting_surfaces_200x200_20230129.jpg' alt=''/>
            <a href='Blank Crafting Surfaces' className={styles.gridShopFieldsHover}>Blank Crafting Surfaces</a>
            </div>
            <div>
            <img src='https://www.dollartree.com/file/general/w_tf_st_patricks_day_200x200_20230129.jpg' alt=''/>
            <a href="St Patrick's Day" className={styles.gridShopFieldsHover}>St Patrick's Day</a>
            </div>
       </div>

       {/* dollarTree */}

       <div className={styles.dollarTree}>
         <h1> Discover Dollar Tree Plus</h1>
        </div>

      
         <Box m='auto' w='90%' pl='38px'>
      <Flex>
            <Box>
               <Image w='90%' 
               src='https://www.dollartree.com/file/general/dt_plus_main_landing_2a_$3_615x260_20221019.jpg' />
               <a href='Shop $ 3 Items' className={styles.gridShopFieldsHover}>Shop $ 3 Items</a>

            </Box>
            <Box>
               <Image w='91%' src='https://www.dollartree.com/file/general/dt_plus_main_landing_2a_$5_615x260_20221019.jpg'/>
               <a href='Shop $ 5 Items' className={styles.gridShopFieldsHover}>Shop $ 5 Items</a>
            </Box>
      </Flex>
         </Box>

        
   
         <div className={styles.gardeningSupplies}>
         <h1> Gardening Supplies You’ll Dig</h1>
        </div>

            <Box  m='auto' w='90%' pl='39px'>
               <Flex>
                  <Box>
                  <Image borderRadius='50%'  w='86%' src='https://www.dollartree.com/file/general/w_3a_planters_pots400x400_20230129.jpg'/>
               <a href='Planters & Pots' className={styles.gridShopFieldsHover}>Planters & Pots</a>
                  </Box>
                  <Box>
                  <Image  borderRadius='50%' w='86%' src='https://www.dollartree.com/file/general/w_3a_gardening_gloves_tools_400x400_20230129.jpg'/>
               <a href='Gardening Gloves & Tools' className={styles.gridShopFieldsHover}>Gardening Gloves & Tools</a>
                  </Box>
                  <Box>
                  <Image borderRadius='50%' w='86%' src='https://www.dollartree.com/file/general/w_3a_gardening_decor_400x400_20230129.jpg'/>
               <a href='Gardening Decor' className={styles.gridShopFieldsHover}>Gardening Decor</a>
                  </Box>
               </Flex>
            </Box>



            {/* Customer-Favorites */}


         <div className={styles.gardeningSupplies}>
         <h1>Customer-Favorites</h1>
        </div>

            <NavLink to='/'>
        <Box m='auto' w='90%' mt={10}>
            <Image src='https://www.dollartree.com/file/general/w_hero_easter_1250x400_20230130.jpg' />
         </Box>
            </NavLink>



            {/* Hidden */}

         <Box m='auto' w='90%' pl='38px' mt='55px'>
      <Flex>
            <Box>
               <Image w='90%' 
               src='https://www.dollartree.com/file/general/w_split_2a_thrill_of_the_hunt_20220227.jpg' />
               <VStack>
            <a style={{fontSize:'30px'}} href="It's the Thrill of the Hunt" className={styles.gridShopFieldsHover}>It's the Thrill of the Hunt</a>
            <Button bg='black' color='white'>Shop Now</Button>
               </VStack>
            </Box>
            <Box>
               <Image w='91%' src='https://www.dollartree.com/file/general/w_split_2a_smallerquantities_newarrivals_20210815.jpg'/>
             
               <VStack>
               <a style={{fontSize:'30px'}} href='New Arrivals' className={styles.gridShopFieldsHover}>New Arrivals</a>
               <Button bg='black' color='white' >Shop Now</Button>       
               </VStack>
            </Box>
      </Flex>
         </Box>


{/* img 3 */}

         <Box  m='auto' w='90%' pl='38px' mt='55px'>
            <Flex>
               <Box bg='rgb(228,232,222)' w='80%'>
               <a style={{fontSize:'20px',}} href="Spring Floral Savings" className={styles.gridShopFieldsHover}>Spring Floral Savings</a>
               <p style={{marginTop:'1%'}}>Make lovely floral displays with affordable supplies!</p>
               <Image mt='45px' w='100%' src='https://www.dollartree.com/file/general/w_curated1__hero_floral_supplies_20230129.jpg'/>
               </Box>

               <Box >
               <hr/>
                  <Box>
                     <Flex>
                        <Box>
                        <Image w='91%' src='https://www.dollartree.com/file/general/w_curated1_accents_gems_marbles_20230129.jpg'/>
                        <a style={{fontSize:'15px'}} href="Accent Gems, Rocks & Marbles" className={styles.gridShopFieldsHover}>Accent Gems, Rocks & Marbles</a>
                        <hr/>
                        </Box>
                        <Box>
                        <Image w='91%' src='https://www.dollartree.com/file/general/w_curated1_candles_20230129.jpg'/>
                        <a style={{fontSize:'15px'}} href="Candles" className={styles.gridShopFieldsHover}>Candles</a>
                        <hr/>
                        </Box>
                     </Flex>
                  </Box>

                  <Box>
                  <Box>
                     <Flex>
                        <Box>
                        <Image w='91%' src='https://www.dollartree.com/file/general/w_curated1_candle_holders_20230129.jpg'/>
                        <a style={{fontSize:'15px'}} href="Candleholders" className={styles.gridShopFieldsHover}>Candleholders</a>
                        </Box>
                        <Box>
                        <Image w='91%' src='https://www.dollartree.com/file/general/w_curated1_vases_containers_20230129.jpg'/>
                        <a style={{fontSize:'15px'}} href="Vases & Containers" className={styles.gridShopFieldsHover}>Vases & Containers</a>
                        </Box>
                     </Flex>
                  </Box>
                  </Box>
               </Box>
               <hr/>
            </Flex>
         </Box>
         <hr/>


{/* img 4  */}



<Box  m='auto' w='90%' pl='38px' mt='55px'>
            <Flex>
               <Box bg='rgb(252,252,253)' w='80%'>
               <a style={{fontSize:'20px'}} href="Spring Floral Savings" className={styles.gridShopFieldsHover}>Spring Cleaning Savings</a>
               <p style={{marginTop:'1%'}}>Make lovely floral displays with affordable supplies!</p>
               <Image mt='45px' w='100%' src='https://www.dollartree.com/file/general/w_curated2__cleaning_20230129.jpg'/>
               </Box>

               <Box >
               <hr/>
                  <Box>
                     <Flex>
                        <Box>
                        <Image w='91%' src='https://www.dollartree.com/file/general/w_curated2_laundry_care_20230129.jpg'/>
                        <a style={{fontSize:'15px'}} href="Accent Gems, Rocks & Marbles" className={styles.gridShopFieldsHover}>Laundry Care</a>
                        <hr/>
                        </Box>
                        <Box>
                        <Image w='91%' src='https://www.dollartree.com/file/general/w_curated2_cleaning_tools_20230129.jpg'/>
                        <a style={{fontSize:'15px'}} href="Candles" className={styles.gridShopFieldsHover}>Cleaning Tools</a>
                        <hr/>
                        </Box>
                     </Flex>
                  </Box>

                  <Box>
                  <Box>
                     <Flex>
                        <Box>
                        <Image w='91%' src='https://www.dollartree.com/file/general/w_curated2_cleaners_20230129.jpg'/>
                        <a style={{fontSize:'15px'}} href="Candleholders" className={styles.gridShopFieldsHover}>Cleaners</a>
                        </Box>
                        <Box>
                        <Image w='91%' src='https://www.dollartree.com/file/general/w_curated2_air_freshner_deodorizers_20230129.jpg'/>
                        <a style={{fontSize:'15px'}} href="Vases & Containers" className={styles.gridShopFieldsHover}>Air Fresheners & Deodorizers</a>
                        </Box>
                     </Flex>
                  </Box>
                  </Box>
               </Box>
            </Flex>
            <hr/>
         </Box>


            {/* brew img */}

            <NavLink to='/'> 
            <Box m='auto' w='90%' pl='38px' mt='55px'>
      <Flex>
            <Box>
               <Image w='90%' 
               src='https://www.dollartree.com/file/general/w_l2_promo_st_patricks_day_615x422_b_20230129.jpg' />
            </Box>
            <Box>
               <Image w='91%' src='https://www.dollartree.com/file/general/w_l2_promo_charger_plates_615x422_20230129.jpg'/>
            </Box>
      </Flex>
         </Box>
            </NavLink>

            {/* Create Cute Crafts on Our Value Seekers Blog */}

         <div className={styles.gardeningSupplies}>
         <h1>Create Cute Crafts on Our Value Seekers Blog</h1>
        </div>

        {/* Create Cute Crafts  */} 

        <Box  m='auto' w='90%' pl='39px'>
               <Flex>
                  <Box>
                  <Image borderRadius='50%'  w='86%' src='https://www.dollartree.com/file/general/w_blog2_diy_wooden_block_bead_family_figurines_20230129.jpg'/>
               <a href='Planters & Pots' className={styles.gridShopFieldsHover}>DIY Wooden Block & Bead Family Figurines</a>
                  </Box>
                  <Box>
                  <Image  borderRadius='50%' w='86%' src='https://www.dollartree.com/file/general/w_blog2_diy_dress_up_easter_bunny_20230129.jpg'/>
               <a href='Gardening Gloves & Tools' className={styles.gridShopFieldsHover}>DIY Dress Up Easter Bunny Decor</a>
                  </Box>
                  <Box>
                  <Image borderRadius='50%' w='86%' src='https://www.dollartree.com/file/general/w_blog2_rustic_bunny_heart_shaped_coasters_20230129.jpg'/>
               <a href='Gardening Decor' className={styles.gridShopFieldsHover}>Rustic Bunny & Heart-Shaped Coasters</a>
                  </Box>
               </Flex>
            </Box>


            {/* #DollarTree */}

        
         <div className={styles.gardeningSupplies}>
         <h1 style={{color:'green'}}>#Prod Factory</h1>
         <h1>Share your Finds & Creations!</h1>
        </div>

       

      </>
   )

}

export default Navbar



