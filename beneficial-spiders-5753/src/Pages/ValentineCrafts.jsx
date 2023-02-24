import React from 'react'
import { getData } from '../Components/api'
import { useState, useEffect } from 'react'
import styles from './ValentineCrafts.module.css'
import { NavLink } from 'react-router-dom'
import { Box, Image } from '@chakra-ui/react'


const ValentineCrafts = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(0);
  const limit = 9

  useEffect(() => {
    setLoading(true)
    getData({ page, limit: 9, sort: 'title', order: 'asc' })
      .then((res) => {
        console.log(res)
        setData(res.data)
        setTotalPage(Math.ceil(+(res.headers['x-total-count']) / limit))
        //console.log((res.headers['x-total-count']));
        setLoading(false)
      })
      .catch((err) => {
        setError(true)
          .finally(() => setLoading(false)
          )
      })
  }, [page])


  return loading ? <h2>Loading...</h2> : error ? <h2>Somthing Went Wrong...</h2> : (


    <div className={styles.valentineCrafts}>
        <h1 style={{fontSize:'50px', marginTop:'20px'}}>Valentine’s Day</h1>
      <Box m='auto' w='90%' mt='10' ml='16%'>
        <Image
    src='https://www.dollartree.com/file/general/dollar_tree_valentines_day_decorations_20230130.jpg' />
      </Box>

      <div className={styles.ch_valentineCrafts}>
        {
          data.map((e) => (
            <NavLink>
              <div className={styles.prod_card} key={e.id}>
                <img style={{ width: '100%' }} src={e.img} alt={e.title} />
                <h4 style={{ marginTop: '10px', fontWeight: '500' }}>{e.title}</h4>
              </div>
            </NavLink>
          ))
        }
      </div>
      <div className={styles.page_btn}>
        <button disabled={page === 1} onClick={() => setPage(page - 1)} className={styles.btn_prods}>&lt; Prev</button>
        <button disabled={page === 1} className={styles.btn_prods}>{page}</button>
        <button disabled={page === totalPage} onClick={() => setPage(page + 1)} className={styles.btn_prods}>Next &gt;</button>
      </div>
    </div>

  )
}

export default ValentineCrafts
