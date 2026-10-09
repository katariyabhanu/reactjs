 import React from 'react'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Cards from './components/Cards'
import Footer from './components/Footer'
 
 const App = () => {
   return (
     <div>
      <Navbar/>
      <p id='carouselheading'> My Carousel Page </p>
      <Carousel/>
       <p id='carouselheading'> My Card's Page </p>
       <Cards/>
       <p id='carouselheading'> My Footer Page </p>
       <Footer/>
     </div>
   )
 }
 
 export default App
