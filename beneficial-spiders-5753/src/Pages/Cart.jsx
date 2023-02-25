import { grey } from '@material-ui/core/colors';
import React, { useEffect } from 'react'
import {useState} from 'react'
import { useParams } from "react-router-dom";
import styles from './Cart.module.css'


const Cart = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);


        useEffect(()=>{
            fetch(`http://localhost:8080/cart`)
            .then((res)=>{
                return res.json()
            })
            .then((json)=>{
                setData(json);
                console.log("in",json);
            })
        },[])

        console.log("data",data);
  
        const handleDelete =()=>{
    
        }

  return (
  <div>
   
   {data?.map((e) => {
          return (
            <div className={styles.main}>
              <img style={{width:'10%', marginLeft:'45%', marginTop:'50px'}} src={e.image} alt= 
                   {e.title}/>
              <h3 style={{ marginTop: '10px', fontWeight: '500'}}>{e.title}</h3>
              <div style={{ marginTop: '10px', fontWeight: '500'}}>{e.price}</div>
              <button  onClick={handleDelete}  className={styles.del_btn}>Remove</button>
              <hr/>
            </div>
          );
        })}

  </div>
  )
}

export default Cart
