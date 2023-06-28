import React from 'react'
import Landing from '../components/Landing'
import Contact from '../components/Contact'
import Services from '../components/Services'
import Featuredproduct from '../components/Featuredproduct'
const Home = () => {
  return (
    <div>
      {/* <h2>home page</h2> */}
      <Landing/>
      <Featuredproduct/>
      <Services/>
      <Contact/>
    </div>
  )
}

export default Home
