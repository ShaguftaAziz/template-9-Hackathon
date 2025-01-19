import React from 'react'
import HomePage from '@/components/HomePages/HomeHero'
import FoodCategory from '@/components/HomePages/FoodCategory'
import OurChefs from '@/components/HomePages/OurChefs'
// import ChefsHero from '@/components/HomePages/ChefsHero'


const Home = () => {

  return ( 
    <div>
      <HomePage />
      <FoodCategory />
      <OurChefs />
     {/* <WhyChooseUs /> */}
      {/* <ChefGrid /> */}

    </div>

  )
}

export default Home
