import React from 'react'
import { tokenValidation } from '../../services/tokenValidation'
import { Navigate,Outlet } from 'react-router-dom'

const ProtectedRoute=()=>{
    return tokenValidation() ? <Outlet/> : <Navigate to="/login" replace/>

}

export default ProtectedRoute;