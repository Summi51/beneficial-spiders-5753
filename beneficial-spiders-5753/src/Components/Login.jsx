import styles from './Login.module.css'
import { useEffect, useState } from 'react'
import React from 'react'
import {NavLink} from 'react-router-dom'
const Login = () => {
  const data={name:"", email:"", password:""}
  const [inputData, setInputData]=useState(data)
  const [flag, setFlag] = useState(false)

  useEffect(()=>{
    console.log("Registered")
  },[flag])
  const handleChange=(e)=>{
    setInputData({...inputData, [e.target.name] :e.target.value})
    console.log(inputData)
  }
  const handleSubmit =(e)=>{
    e.preventDefault()
    if(!inputData.name || !inputData.email || !inputData.password){
            alert("All fields are Mandatory")
    } else{
      setFlag(true)
    }
  }

  return (
    <>

  <NavLink to='/'>
   <pre style={{fontSize:'23px', fontWeight:'bold', color:"blue", marginTop:'50px'}}>{(flag)?<h2 className='ui- 
   define'>Hello {inputData.name}, You've Login Successfully</h2>:""}</pre>
</NavLink>

  <form className={styles.container} onSubmit={handleSubmit}>
    <div className={styles.header}>
      <h1>Your Account</h1>
    </div>
    <div>
    <input type='text' placeholder='Enter Your Name' name="name" value={inputData.name} onChange={handleChange}></input>
    </div>
    <div>
    <input type='text' placeholder='Enter Your Email' name="email" value={inputData.email} onChange={handleChange}></input>
    </div>
    <div>
    <input type='text' placeholder='Enter Your Password' name="password" value={inputData.password} onChange={handleChange}></input>
    </div>
    <div>
      <button style={{border:'1px solid white',  padding: '12px 5px 12px 5px', backgroundColor:'black', color:'white', margin: '28px 0'}} type='submit'>SIGN IN</button>
    </div>
  </form>

  </>
  )

}

export default Login

