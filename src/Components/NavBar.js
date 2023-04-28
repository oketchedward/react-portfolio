import React from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';
import deved from '../assets/dev-ed-wave.png';

function NavBar({dark}) {
 
  return (
    <>
    <div className="py-10 mb-12 flex justify-between">
    <h1 className='text-xl font-burtons dark:text-teal-500'>Developed-By Edward-cruz </h1>
     <ul className='flex items-center'>
        <li><BsFillMoonStarsFill onClick={dark} className='cursor-pointer text-2xl' /></li>
        <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a></li>
    </ul>
    </div>
    <div className="text-center p-10 py-10">
        <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>OKETCH EDWARD-CRUZ</h2>
        <h3 className='text-2xl py-2 md:text-3xl'>Developer, Designer And Network Engineer</h3>
        <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-teal-600'>As a highly skilled and experienced programmer and network engineer, I am passionate about designing, building, and optimizing complex systems that drive innovation and solve real-world problems. With a strong foundation in computer programming, network architecture, and cybersecurity, I bring a unique blend of technical expertise and creative problem-solving to every project I undertake.</p>
    </div>
    <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
        <AiFillTwitterCircle/>
        <AiFillLinkedin />
        <AiFillYoutube />
    </div>
    <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <img src={deved} alt="Photo"  className='object-cover w-full h-full' />
    </div>
    </>
  );
}

export default NavBar
