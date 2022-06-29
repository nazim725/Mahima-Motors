import React from 'react'
import Footer from '../../Shared/Footer/Footer'
import NavigationBar from '../../Shared/Navigation/NavigationBar'
import Navigation from '../../Shared/Navigation/Navigation'
import About from '../About/About'
import Banner from '../Banner/Banner'
import Products from '../Products/Products'
import Reviews from '../Review/Reviews/Reviews'
import CountDown from '../CountDown/CountDown'

const Home = () => {
  return (
    <div
      style={{
        background: `url(https://wallpaperaccess.com/full/4129330.jpg)`,
        backgroundAttachment: 'fixed',
      }}
    >
      <NavigationBar></NavigationBar>
      {/* <Navigation></Navigation> */}
      <Banner></Banner>
      <Products></Products>
      <CountDown />
      <Reviews></Reviews>
      <About></About>
      <Footer></Footer>
    </div>
  )
}

export default Home
