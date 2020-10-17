import React from 'react';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  

import './Slider.css'
import slide1 from '../../../images/carousel-1.png'
import slide2 from '../../../images/carousel-2.png'
import slide3 from '../../../images/carousel-3.png'
import slide4 from '../../../images/carousel-4.png'
import slide5 from '../../../images/carousel-5.png'
const Slider = () => {
    const options = {
        items: 3,
        autoHeight:true,
        autoWidth:true,
        autoplay:true,
        slideSpeed: 3000,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        margin:8,
        loop:true
    };
    return (
       <section className="slider my-5 py-5">
             <div className="">
                 <h2 className="text-center text-white">Here are some of <span style={{color:'#7AB259'}}>our work</span></h2>
              <div className="carosel ml-auto my-5">
                    <OwlCarousel  {...options} className="" >  
                        <div  className="item"><img src={slide1}  alt="The Last of us"/></div>
                        <div  className="item"><img  src={slide4}  alt="The Last of us"/></div>
                        <div  className="item"><img  src={slide2} alt="GTA V"/></div>
                        <div  className="item"><img className="slide3"src={slide3}  alt="The Last of us"/></div>
                        <div  className="item"><img  src={slide5} alt="GTA V"/></div>
                     </OwlCarousel>
              </div>
             </div>
       </section>
    );
};

export default Slider;