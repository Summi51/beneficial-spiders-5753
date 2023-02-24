import { Box, Button, Flex, Image, VStack } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Home.module.css'

// sypress import here

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";

const Home = () => {

    return (

        <div>
        
            {/* Swiper part here Img Slider */}
            
            <Swiper
                slidesPreView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
            >
                <SwiperSlide>
                    <Image src='https://www.dollartree.com/file/general/w_hero_st_patricks_day_1250x400_20230130.jpg' ml='70px'
                         mt='50px' w='90%' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src='https://www.dollartree.com/file/general/w_hero_easter_1250x400_20230130.jpg' w='90%' mt='50px'
                         ml='70px' />
                </SwiperSlide>
            </Swiper>


            <div className={styles.shopFinds}>
                <h1>Shop Thrilling Finds</h1>
            </div>

            {/* fetch part */}

            <div className={styles.gridShopFields}>
                <div>
                    <img src='https://www.dollartree.com/file/general/w_tf_easter_craft_supplies_200x200_20230129.jpg' alt='' />
                    <a href='Easter Craft Supplies' className={styles.gridShopFieldsHover}>Easter Craft Supplies</a>
                </div>
                <div>
                    <img src='https://www.dollartree.com/file/general/w_tf_easter_baskets_buckets_pails_200x200_20230129.jpg' 
                        alt='' />
                    <a href='Easter Baskets, Buckets & Pails' 
                        className={styles.gridShopFieldsHover}>Easter Baskets, Buckets & Pails</a>
                </div>
                <div>
                    <img src='https://www.dollartree.com/file/general/w_tf_easter_decor_200x200_20230129.jpg' alt='' />
                    <a href='Easter Decor' className={styles.gridShopFieldsHover}>Easter Decor</a>
                </div>
                <div>
                    <img src='https://www.dollartree.com/file/general/w_tf_vases_containers_200x200_20230129.jpg' alt='' />
                    <a href='Vases & Containers' className={styles.gridShopFieldsHover}>Vases & Containers</a>
                </div>
                <div>
                    <img src='https://www.dollartree.com/file/general/w_tf_storage_organization_200x200_20230129.jpg' alt='' />
                    <a href='Storage & Organization' className={styles.gridShopFieldsHover}>Storage & Organization</a>
                </div>
                <div>
                    <img src='https://www.dollartree.com/file/general/w_tf_catering_supplies_200x200_20230129.jpg' alt='' />
                    <a href='Catering Supplies' className={styles.gridShopFieldsHover}>Catering Supplies</a>
                </div>
                <div>
                    <img src='https://www.dollartree.com/file/general/w_tf_books_200x200_20230129.jpg' alt='' />
                    <a href='Books' className={styles.gridShopFieldsHover}>Books</a>
                </div>
                <div>
                    <img src='https://www.dollartree.com/file/general/w_tf_health_beauty_supplies_200x200_20230129.jpg' alt='' />
                    <a href='Health & Beauty Supplies' className={styles.gridShopFieldsHover}>Health & Beauty Supplies</a>
                </div>
                <div>
                    <img src='https://www.dollartree.com/file/general/w_tf_gardening_supplies_200x200_20230129.jpg' alt='' />
                    <a href='Gardening Supplies' className={styles.gridShopFieldsHover}>Gardening Supplies</a>
                </div>
                <div>
                    <img src='https://www.dollartree.com/file/general/w_tf_office_supplies_200x200_20230129.jpg' alt='' />
                    <a href='Office Supplies'
                        className={styles.gridShopFieldsHover}>Office Supplies
                    </a>
                </div>
                <div>
                    <img src='https://www.dollartree.com/file/general/w_tf_blank_crafting_surfaces_200x200_20230129.jpg' alt='' />
                    <a href='Blank Crafting Surfaces'
                        className={styles.gridShopFieldsHover}>Blank Crafting Surfaces
                    </a>
                </div>
                <div>
                    <img src='https://www.dollartree.com/file/general/w_tf_st_patricks_day_200x200_20230129.jpg' alt='' />
                    <a href="St Patrick's Day"
                        className={styles.gridShopFieldsHover}>St Patrick's Day
                    </a>
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
                        <a href='Shop $ 3 Items'
                            className={styles.gridShopFieldsHover}>Shop $ 3 Items
                        </a>

                    </Box>
                    <Box>
                        <Image w='91%' src='https://www.dollartree.com/file/general/dt_plus_main_landing_2a_$5_615x260_20221019.jpg' />
                        <a href='Shop $ 5 Items'
                            className={styles.gridShopFieldsHover}>Shop $ 5 Items
                        </a>
                    </Box>
                </Flex>
            </Box>



            <div className={styles.gardeningSupplies}>
                <h1> Gardening Supplies You’ll Dig</h1>
            </div>

            <Box m='auto' w='90%' pl='39px'>
                <Flex>
                    <Box>
                        <Image borderRadius='50%' w='86%' 
                            src='https://www.dollartree.com/file/general/w_3a_planters_pots400x400_20230129.jpg' />
                        <a href='Planters & Pots' className={styles.gridShopFieldsHover}>Planters & Pots</a>
                    </Box>
                    <Box>
                        <Image borderRadius='50%' w='86%' 
                            src='https://www.dollartree.com/file/general/w_3a_gardening_gloves_tools_400x400_20230129.jpg' />
                        <a href='Gardening Gloves & Tools' className={styles.gridShopFieldsHover}>Gardening Gloves & Tools</a>
                    </Box>
                    <Box>
                        <Image borderRadius='50%' w='86%' 
                            src='https://www.dollartree.com/file/general/w_3a_gardening_decor_400x400_20230129.jpg' />
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
                            <a style={{ fontSize: '30px' }} href="It's the Thrill of the Hunt" className={styles.gridShopFieldsHover}>It's the Thrill of the Hunt</a>
                            <Button bg='black' color='white'>Shop Now</Button>
                        </VStack>
                    </Box>
                    <Box>
                        <Image w='91%' src='https://www.dollartree.com/file/general/w_split_2a_smallerquantities_newarrivals_20210815.jpg' />

                        <VStack>
                            <a style={{ fontSize: '30px' }} href='New Arrivals' className={styles.gridShopFieldsHover}>New Arrivals</a>
                            <Button bg='black' color='white' >Shop Now</Button>
                        </VStack>
                    </Box>
                </Flex>
            </Box>


            {/* img 3 */}

            <Box m='auto' w='90%' pl='38px' mt='55px'>
                <Flex>
                    <Box bg='rgb(228,232,222)' w='80%'>
                        <a style={{ fontSize: '20px', }} href="Spring Floral Savings" className={styles.gridShopFieldsHover}>Spring Floral Savings</a>
                        <p style={{ marginTop: '1%' }}>Make lovely floral displays with affordable supplies!</p>
                        <Image mt='45px' w='100%' src='https://www.dollartree.com/file/general/w_curated1__hero_floral_supplies_20230129.jpg' />
                    </Box>

                    <Box >
                        <hr />
                        <Box>
                            <Flex>
                                <Box>
                                    <Image w='91%' src='https://www.dollartree.com/file/general/w_curated1_accents_gems_marbles_20230129.jpg' />
                                    <a style={{ fontSize: '15px' }} href="Accent Gems, Rocks & Marbles" className={styles.gridShopFieldsHover}>Accent Gems, Rocks & Marbles</a>
                                    <hr />
                                </Box>
                                <Box>
                                    <Image w='91%' src='https://www.dollartree.com/file/general/w_curated1_candles_20230129.jpg' />
                                    <a style={{ fontSize: '15px' }} href="Candles" className={styles.gridShopFieldsHover}>Candles</a>
                                    <hr />
                                </Box>
                            </Flex>
                        </Box>

                        <Box>
                            <Box>
                                <Flex>
                                    <Box>
                                        <Image w='91%' src='https://www.dollartree.com/file/general/w_curated1_candle_holders_20230129.jpg' />
                                        <a style={{ fontSize: '15px' }} href="Candleholders" className={styles.gridShopFieldsHover}>Candleholders</a>
                                    </Box>
                                    <Box>
                                        <Image w='91%' src='https://www.dollartree.com/file/general/w_curated1_vases_containers_20230129.jpg' />
                                        <a style={{ fontSize: '15px' }} href="Vases & Containers" className={styles.gridShopFieldsHover}>Vases & Containers</a>
                                    </Box>
                                </Flex>
                            </Box>
                        </Box>
                    </Box>
                    <hr />
                </Flex>
            </Box>
            <hr />


            {/* img 4  */}



            <Box m='auto' w='90%' pl='38px' mt='55px'>
                <Flex>
                    <Box bg='rgb(252,252,253)' w='80%'>
                        <a style={{ fontSize: '20px' }} href="Spring Floral Savings" className={styles.gridShopFieldsHover}>Spring Cleaning Savings</a>
                        <p style={{ marginTop: '1%' }}>Make lovely floral displays with affordable supplies!</p>
                        <Image mt='45px' w='100%' src='https://www.dollartree.com/file/general/w_curated2__cleaning_20230129.jpg' />
                    </Box>

                    <Box >
                        <hr />
                        <Box>
                            <Flex>
                                <Box>
                                    <Image w='91%' src='https://www.dollartree.com/file/general/w_curated2_laundry_care_20230129.jpg' />
                                    <a style={{ fontSize: '15px' }} href="Accent Gems, Rocks & Marbles" className={styles.gridShopFieldsHover}>Laundry Care</a>
                                    <hr />
                                </Box>
                                <Box>
                                    <Image w='91%' src='https://www.dollartree.com/file/general/w_curated2_cleaning_tools_20230129.jpg' />
                                    <a style={{ fontSize: '15px' }} href="Candles" className={styles.gridShopFieldsHover}>Cleaning Tools</a>
                                    <hr />
                                </Box>
                            </Flex>
                        </Box>

                        <Box>
                            <Box>
                                <Flex>
                                    <Box>
                                        <Image w='91%' src='https://www.dollartree.com/file/general/w_curated2_cleaners_20230129.jpg' />
                                        <a style={{ fontSize: '15px' }} href="Candleholders" className={styles.gridShopFieldsHover}>Cleaners</a>
                                    </Box>
                                    <Box>
                                        <Image w='91%' src='https://www.dollartree.com/file/general/w_curated2_air_freshner_deodorizers_20230129.jpg' />
                                        <a style={{ fontSize: '15px' }} href="Vases & Containers" className={styles.gridShopFieldsHover}>Air Fresheners & Deodorizers</a>
                                    </Box>
                                </Flex>
                            </Box>
                        </Box>
                    </Box>
                </Flex>
                <hr />
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
                            <Image w='91%' src='https://www.dollartree.com/file/general/w_l2_promo_charger_plates_615x422_20230129.jpg' />
                        </Box>
                    </Flex>
                </Box>
            </NavLink>

            {/* Create Cute Crafts on Our Value Seekers Blog */}

            <div className={styles.gardeningSupplies}>
                <h1>Create Cute Crafts on Our Value Seekers Blog</h1>
            </div>

            {/* Create Cute Crafts  */}

            <Box m='auto' w='90%' pl='39px'>
                <Flex>
                    <Box>
                        <Image borderRadius='50%' w='86%' src='https://www.dollartree.com/file/general/w_blog2_diy_wooden_block_bead_family_figurines_20230129.jpg' />
                        <a href='Planters & Pots' className={styles.gridShopFieldsHover}>DIY Wooden Block & Bead Family Figurines</a>
                    </Box>
                    <Box>
                        <Image borderRadius='50%' w='86%' src='https://www.dollartree.com/file/general/w_blog2_diy_dress_up_easter_bunny_20230129.jpg' />
                        <a href='Gardening Gloves & Tools' className={styles.gridShopFieldsHover}>DIY Dress Up Easter Bunny Decor</a>
                    </Box>
                    <Box>
                        <Image borderRadius='50%' w='86%' src='https://www.dollartree.com/file/general/w_blog2_rustic_bunny_heart_shaped_coasters_20230129.jpg' />
                        <a href='Gardening Decor' className={styles.gridShopFieldsHover}>Rustic Bunny & Heart-Shaped Coasters</a>
                    </Box>
                </Flex>
            </Box>


            {/* #DollarTree */}


            <div className={styles.gardeningSupplies}>
                <h1 style={{ color: 'green' }}>#Prod Factory</h1>
                <h1>Share your Finds & Creations!</h1>
            </div>

            {/* last image part */}

            <Box m='auto' w='90%' pl='39px'>
                <Box>
                    <Flex>
                        <Box>
                            <Image w='86%' src='https://cdn.wyng.com/54ac3103ef95a67c1cff8ef2/63f3cb5d27d42b009547bedc.JPEG' />
                        </Box>
                        <Box>
                            <Image w='86%' src='https://cdn.wyng.com/54ac3103ef95a67c1cff8ef2/63f3bd5b79601a005c5bc43a.JPEG' />
                        </Box>
                        <Box>
                            <Image w='86%' src='https://cdn.wyng.com/54ac3103ef95a67c1cff8ef2/63f3bd5834ac22007dc4bba3.JPEG' />
                        </Box>
                        <Box>
                            <Image w='86%' src='https://cdn.wyng.com/54ac3103ef95a67c1cff8ef2/63f3a4bde0ace2007d8c3584.JPEG' />
                        </Box>
                    </Flex>
                </Box>
                <Box pt='39px'>
                    <Flex>
                        <Box>
                            <Image w='86%' src='https://cdn.wyng.com/54ac3103ef95a67c1cff8ef2/63f3a132e0ace20065222833.JPEG' />
                        </Box>
                        <Box>
                            <Image w='86%' src='https://cdn.wyng.com/54ac3103ef95a67c1cff8ef2/63c0806f0a197c00a48fa594.JPEG' />
                        </Box>
                        <Box>
                            <Image w='86%' src='https://cdn.wyng.com/54ac3103ef95a67c1cff8ef2/63c07cf31eaf8f0323b4c2d6.JPEG' />
                        </Box>
                        <Box>
                            <Image w='86%' src='https://cdn.wyng.com/54ac3103ef95a67c1cff8ef2/63c07cf1e5940c00a5ebbdc9.JPEG' />
                        </Box>
                    </Flex>
                </Box>
            </Box>

            <hr style={{ w: '90%', marginTop: '260px', color: 'gray' }} />

            <Box m='auto' w='90%' pl='39px' pt='50px'>
                <Flex justifyContent='space-around'>
                    <Box>
                        <a href='Email Sign Up' className={styles.gridShopFieldsHover}>Email Sign Up</a>
                    </Box>
                    <Box>
                        <p>Be the first to know about new arrivals online, in-store specials & events, fun ideas & inspiration, and <br /> more!</p>
                    </Box>
                    <Box>
                        <Button color='white' bg='rgb(23,76,149)'>Sign Up</Button>
                    </Box>
                </Flex>
            </Box>
        </div>
    )
}

export default Home
