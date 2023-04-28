import React from 'react'
import design from '../assets/design.png';
import code from '../assets/code.png';
import consulting from '../assets/consulting.png';
function Services() {
  return ( 
    <div className=''>
      <h3 className='text-3xl py-1 dark:text-teal-600'>Services I offer</h3>
      <p className='text-md leading-8 text-gray-800 dark:text-white'>Since the beginning of my journey as the freelancer developer, I've done remote work for 
      <span className='text-teal-500'> agencies </span>
      consulted for <span className='text-teal-500'>startups </span>
      and collaborated with talented people to create digital programs for both business and customer use.
      </p>
      <p className='text-md py-2 leading-8 text-gray-800 text:dark dark:text-white'>I offer from a wide range of services, including programming and teaching.</p>

      <div className="lg:flex gap-10">
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
            <div className="justify-center flex">
            <img src={design} width={100} height={100} />
            </div>
            <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
            <p className='py-2'>With a keen eye for aesthetics and a deep understanding of design principles, I bring ideas to life through visually appealing and functional designs. From user-friendly interfaces to eye-catching graphics.</p>
            <h4 className='py-4 text-teal-600'>Design tools I use</h4>
            <p className='text-gray-800 py-1'>Photoshop</p>
            <p className='text-gray-800 py-1'>Illustrator</p>
            <p className='text-gray-800 py-1'>Figma</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
          <div className="justify-center flex">
            <img src={consulting} width={100} height={100} />
            </div>
            <h3 className='text-lg font-medium pt-8 pb-2'>Networking Services</h3>
            <p className='py-2'>Network Architecture: Strong understanding of network design principles, protocols, and technologies, including LAN, WAN, routing, switching, and security.</p>
            <h4 className='py-4 text-teal-600'>Networking tools I use</h4>
            <p className='text-gray-800 py-1'>Win Box</p>
            <p className='text-gray-800 py-1'>Clipping Tools</p>
            <p className='text-gray-800 py-1'>Cable Testers</p>
            <p className='text-gray-800 py-1'>Fusion Splicers</p>
            <p className='text-gray-800 py-1'>OTDR</p>
            <p className='text-gray-800 py-1'>Fiber ID</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
          <div className="justify-center flex">
            <img src={code} width={100} height={100} />
            </div>
            <h3 className='text-lg font-medium pt-8 pb-2 mx-5'>Programming</h3>
            <p className='py-2'>As a programmer, I am a problem solver and a creative thinker, utilizing my technical skills to build innovative solutions. With a passion for coding and a deep understanding of various programming languages, frameworks.</p>
            <h4 className='py-4 text-teal-600'>Languages I use</h4>
            <p className='text-gray-800 py-1'>React</p>
            <p className='text-gray-800 py-1'>Html:5</p>
            <p className='text-gray-800 py-1'>React Native</p>
            <p className='text-gray-800 py-1'>PHP</p>
            <p className='text-gray-800 py-1'>BootStrap</p>
            <p className='text-gray-800 py-1'>React Native</p>

          </div>  
      </div>
    </div>
  )
}

export default Services
