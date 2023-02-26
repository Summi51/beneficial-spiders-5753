import { grey } from '@material-ui/core/colors';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from "react-router-dom";
import styles from './Cart.module.css'


const Cart = () => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const fetchAndUpdate = () => {
    fetch(`http://localhost:8080/cart`)
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        setData(json);
        console.log("in", json);
      })
  }
  useEffect(() => {
    fetchAndUpdate()
  }, [])

  console.log("data", data);

  const handleDelete = (id) => {
    DeleteTask(id)
    fetchAndUpdate()
  }
  const DeleteTask = (id) => {
    fetch(`http://localhost:8080/cart/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => console.log(res))
      .catch((err) => console(err))
  }

  console.log(Number("₹400"))
  return (
    <div>
      {data?.map((e) => {
        return (
          <>
            <div className={styles.main}>
              <img style={{ width: '10%', marginLeft: '45%', marginTop: '50px' }} src={e.image} alt=
                {e.title} />
              <h3 style={{ marginTop: '10px', fontWeight: '500' }}>{e.title}</h3>
              <div style={{ marginTop: '10px', fontWeight: '500' }}>{e.price}</div>
              <button onClick={() => handleDelete(e.id)} className={styles.del_btn}>Remove</button>
              <hr />
            </div>

          </>
        );
      })}
      <div>
        <h1 style={{ fontSize: '30px', fontWeight: '20px' }}>Total : {data.reduce((acc, el) => {
          return acc + parseInt(el.price) * 1
        }, 0)}</h1>
      </div>
    </div>
  )
}

export default Cart
