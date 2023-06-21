import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SideBar from '../components/SideBar'
const SharedLayout = () => {
  return (
    <>
    <Navbar/>
    <SideBar/>
      <Outlet/>
    <Footer/>
    </>
  )
}

export default SharedLayout
