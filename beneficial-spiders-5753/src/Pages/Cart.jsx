import React, { useEffect } from 'react'
import {useState} from 'react'
import { useParams } from "react-router-dom";

// const getData=()=>{
//     return fetch(`http://localhost:8080/cart`)
    
// }

const Cart = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);


    // const fetchAndUpdateData = () => {
    //     setLoading(true);
    //     getData()
    //     .then((data)=>{
            
    //         //console.log(data)
    //         return data.json()
    //       }).then((res)=> {
    //        setData(res.data)
    //         console.log(res)
    //     })
    //       .catch((err) => setError(true))
    //       .finally(() => setLoading(false));
    //   };

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
    

      


  return (
    <div>
   
   {data?.map((e) => {
          return (
            <div>
              <img src={e.image} alt={e.title}/>
              <h3 className="name">{e.title}</h3>
              {/* <div className="brand">{e.brand}</div> */}
              <div className="price">{e.price}</div>
            </div>
          );
        })}

  </div>
  )
}

export default Cart
