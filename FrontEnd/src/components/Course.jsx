import React from 'react'
import list from "../../public/list.json"
import { Link } from 'react-router-dom'
import Cards from './Cards'

export default function Course() {

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900'>
        <div className='mt-28 text-center'>
            <h1 className='text-2xl font-semibold md:text-4xl'>We're delighted to have you {" "} <span className='text-pink-500'>Here!:)</span></h1>
            <p className='mt-12'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, 
            sapiente dignissimos. Nesciunt eum omnis temporibus dolore facere totam cum, in velit.
             Odio veritatis laboriosam vitae minima alias esse, necessitatibus aliquid! Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Quaerat debitis maxime possimu
                modi aliquid? Officiis magni
              perspiciatis cumque quaerat consequatur.</p>
              <Link to="/">
             <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
              </Link>
        </div>
     <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
   
        {
        list.map((item)=>{
          return <Cards item={item} key={item.id}/>
        })
        }

     </div>
    </div>
    </>
  )
}
