import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ( {children}) => {
  const {loading , user} = useContext(AuthContext)
  
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
  
    }
    else if(user.role!=="user"){
        return children
    }
    return <Navigate  to={"/not-found"}/>
}

export default PrivateRoutes