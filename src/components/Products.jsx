import React from 'react'
import {Carousel } from 'react-bootstrap'
import '../components/product.css';
import carousel1 from '../Images/carousel1.jpg'
import carousel2 from '../Images/carousel2.jpg'
import carousel3 from '../Images/carousel3.jpg'
import Cards from './Card';
import Card1 from "../Images/card1.jpg";
import Card2 from "../Images/card2.jpg";
import Card3 from "../Images/card3.webp";
import Card4 from "../Images/card4.jpg";
import Card5 from "../Images/Card5.jpg";
import Card6 from "../Images/card6.jpeg";
import card7 from "../Images/card7.jpg";
import card8 from "../Images/card8.jpg";
import Footer from './footer';


function Products() {
    return (
        <> 
        <div className="container-fluid carouselImg" style={{display:'block',padding:30}}>
             <Carousel>
                 <Carousel.Item interval={1500}> 
                     <img src={carousel1} alt={carousel1}/>
                 </Carousel.Item>
                 <Carousel.Item interval={1500}>
                      <img src={carousel2} alt={carousel2} />
                 </Carousel.Item >
                 <Carousel.Item interval={500}>
                     <img src={carousel3} alt={carousel3}/>
                 </Carousel.Item>
             </Carousel>
        </div>

        <div className="container-fluid">
           <div className="row">
           <Cards image={Card1} heading={"Men's Shirt"} />
           <Cards image={Card2} heading={"Men's Jeans"} />
           <Cards image={Card3} heading={"Men's Shorts"} />
           <Cards image={Card4} heading={"Men's thirt"} />
           <Cards image={Card5} heading={"Saree"} />
           <Cards image={Card6} heading={"Skirt"} />
           <Cards image={card7} heading={"Coat"} />
           <Cards image={card8} heading={"Cap"} />
        
           
           </div>
        </div>

        <div>
             <Footer />
        </div>

        </>
    )
}

export default Products
