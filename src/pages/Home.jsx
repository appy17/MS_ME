import React from 'react'
import Slider from "../components/Slider";
import Cards from '../components/Cards';
import Services from '../components/Services';
import LatestNews from '../components/LatestNews';
import UsefulLinks from '../components/UsefulLinks';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';

const Home = () => {
  return (
    <>
      <Slider />
      <Cards/>
      <Services />
      <LatestNews/>
      <UsefulLinks />
      <Footer />
      <ScrollToTopButton/>
    </>
  )
}

export default Home