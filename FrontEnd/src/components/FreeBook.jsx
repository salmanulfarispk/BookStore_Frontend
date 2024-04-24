import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from "../../public/list.json"
import Slider from "react-slick";
import Cards from './Cards';

export default function FreeBook() {

     const filterdata=list.filter((item)=>(
        item.category=== "Free"
     ))

     var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div>
     <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quos debitis dolorem blanditiis exercitationem ipsam sint quasi, aut corporis, ut quis consequuntur inventore el</p>
     </div>
    <div>
    <Slider {...settings}>
      {filterdata.map((item)=>(
        <Cards item={item} key={item.id}/>
      ))}
      </Slider>
    </div>
    </div>
    </>
  )
}
