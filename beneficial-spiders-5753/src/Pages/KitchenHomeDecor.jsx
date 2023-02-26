import styles from './KitchenHomeDecor.module.css'
import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { Box, Image } from '@chakra-ui/react';
import { searchContext } from '../Context/SearchContextProvider'
import { useContext } from 'react';
import axios from 'axios';
import { Search2Icon } from '@chakra-ui/icons';

const Product = () => {
  const { q } = useContext(searchContext)
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 9;
  const [product, setProduct] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()


  const [total, setTotal] = useState(0);
  let lastPage = Math.ceil(total / limit)

  // Sortings
  const sort = 'price';
  const [priceBy, setPriceBy] = useState('')


  // For data mount
  useEffect(() => {

    let PriceUrlBy;

    if (priceBy) {
      PriceUrlBy = `http://localhost:8080/kitchen?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${priceBy}`
    }
    else {
      PriceUrlBy = `http://localhost:8080/kitchen?_page=${page}&_limit=${limit}`
    }



    fetch(PriceUrlBy)
      .then((res) => {
        // console.log(res.headers.get('X-Total-Count'))
        // console.log(typeof (res.headers.get('X-Total-Count')))
        setTotal(Number(res.headers.get('x-total-count')))
        return res.json()
      })
      .then((data) => { setData(data) })
      .catch((err) => console.log(err))
  }, [page, priceBy])
  // console.log(data)



  // For parameters

  useEffect(() => {
    let params = { page, priceBy }
    setSearchParams(params)
  }, [page, priceBy])
  console.log(q)

  const fetchproduct = (page, q)=>{
    axios(`http://localhost:8080/kitchen?q=${q}&_page=${page}&_limit=9`)
    .then((res)=>{
      setTotal(res.headers['x-total-count'])
      setProduct(res)
      
    })
    .catch((err)=>
      console.log(err)
    )
  }

  return (

    <div className={styles.valentineCrafts}>
         <h1 style={{ fontSize: '50px', marginTop: '20px' }}>Dinnerware</h1>
           <Box w='90%' mt='10' mb='55px' ml='200px'>
             <Image     
src='https://www.dollartree.com/file/general/dollar_tree_hero_dinnerware_20230106.jpg' />
           </Box>     
      <div
             style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: "center"
               }}
            >
              <input placeholder='   Search Prod Factory' style={{
                  width: '30%', height: '35px', marginTop: '47px', borderRadius: 
                    '1px', border: '1px solid grey'
               }}
               />
               <Search2Icon mt='12' ml='-6' />
            </div>

      <div className={styles.page_btn}>
        <button onClick={() => setPriceBy('asc')} className={styles.btn_prods_sort}>Low to High</button>
        <button onClick={() => setPriceBy('desc')} className={styles.btn_prods_sort}>High to Low</button>
      </div>
      {/* to='/kitchen_home_decor/:id' */}
      <div className={styles.ch_valentineCrafts}>
        {
          data?.map((item) => (
            <NavLink to={`/kitchen_home_decor/${item.id}`}>
              <div className={styles.prod_card} key={item.id}>
                <img style={{ width: '100%' }} src={item.img} alt={item.title} />
                <h4 style={{ marginTop: '10px', fontWeight: '500' }}>{item.title}</h4>
                <h5 style={{ marginTop: '10px', fontWeight: '500' }}>Rs.{item.price}/-</h5>
                {/* <Link to={`/product/${item.id}`}>More</Link> */}
              </div>
            </NavLink>
          ))
        }
      </div>
      {/* pagination */}
      <div className={styles.page_btn}>
        <button disabled={page === 1} onClick={() => setPage(page - 1)} className={styles.btn_prods}>&lt; Prev</button>
        <button disabled={page === 1} className={styles.btn_prods}>{page}</button>
        <button disabled={page === lastPage} onClick={() => setPage(page + 1)} className={styles.btn_prods}>Next &gt;</button>
      </div>
    </div>
  )
}

export default Product
