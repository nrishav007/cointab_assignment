import React from 'react'
import {Routes,Route} from "react-router-dom";
import Home from './../Pages/Home';
import AllUser from './../Pages/AllUser';
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/allusers' element={<AllUser/>} ></Route>
    </Routes>
  )
}

export default AllRoutes