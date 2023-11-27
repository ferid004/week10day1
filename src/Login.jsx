import React from 'react'
import {useNavigate} from "react-router-dom";

function Login() {
    const navigate=useNavigate()

    const haddleLogin=()=>{
        navigate('/')
    }
  return (
    <div>
        <h1>login page</h1>
        <button onClick={haddleLogin}> sing in</button>
    </div>
  )
}

export default Login