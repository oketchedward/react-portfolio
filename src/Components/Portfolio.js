import React from 'react'
import we from '../assets/we.png';
import we3 from '../assets/we3.png';
import we4 from '../assets/we4.png';
import we5 from '../assets/we5.png';
import we1 from '../assets/we1.png';
import we2 from '../assets/we2.png';
function Portfolio() {
  return (
    <div>
        <div className="">
        <h3 className='text-3xl py-1 dark:text-teal-400'>Portofolio</h3>
        <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>Since the beginning of my journey as the freelancer developer, I've done remote work for 
      <span className='text-teal-500'> agencies </span>
      consulted for <span className='text-teal-500'>startups </span>
      and collaborated with talented people to create digital programs for both business and customer use.
      </p>
      <p className='text-md py-2 leading-8 text-gray-800 text:dark dark:text-white'>I offer from a wide range of services, including programming and teaching.</p>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
               <img src={we} className="rounded-lg object-cover" width={'100%'} height={'100%'}  />  
            </div>
            <div className="basis-1/3 flex-1">
               <img src={we3} className="rounded-lg object-cover" width={'100%'} height={'100%'} />  
            </div>
            <div className="basis-1/3 flex-1">
               <img src={we4} className="rounded-lg object-cover" width={'100%'} height={'100%'} />  
            </div>
            <div className="basis-1/3 flex-1">
               <img src={we5} className="rounded-lg object-cover" width={'100%'} height={'100%'} />  
            </div>
            <div className="basis-1/3 flex-1">
               <img src={we1} className="rounded-lg object-cover" width={'100%'} height={'100%'}/>  
            </div>
            <div className="basis-1/3 flex-1">
               <img src={we2} className="rounded-lg object-cover" width={'100%'} height={'100%'}/>  
            </div>
        </div>  
    </div>
  )
}

export default Portfolio
 