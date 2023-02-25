import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const getData = (id) => {
  return fetch(`http://localhost:8080/kitchen/${id}`).then((res) => res.json());
};

const SingleKitchenHomeDecor = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState({});
  const [cart,setCart] = useState([]);


  const params = useParams();
  console.log(params);

  const fetchAndData = (id) => {
    setLoading(true);
    getData(id)
    .then((data) => { 
      setData(data) ;
      setCart(data);
    })
       .catch((err) => setError(true))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchAndData(params.id);
  }, [params.id]);
  // console.log(data)

  const handleClick =()=>{
    let item={
      image: data?.img,
      title: data?.title,
      price: data?.price
    }
    fetch(`http://localhost:8080/cart`, {
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      
      },
      body:JSON.stringify(item),
      
    }).then((res)=>{
      res.json();
      console.log(res)
    }).catch((err)=>{console.log(err);})
;   //console.log(item);
  }

  return loading ? (
    <h2>Loading..</h2>
  ) : error ? (
    <h2>Something Went Wrong..</h2>
  ) : (
    <div>
      <img style={{width:'300px'}} src={data?.img} alt={data?.title} />
      <h4>
       {data?.title}
      </h4>
      <h4>{data?.price}</h4>
      <button 
       onClick={handleClick}>Add to cart</button>
    </div>
  );
};

export default SingleKitchenHomeDecor;

