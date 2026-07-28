import React from 'react'
import aboutim from '../../assets/hero.png';
import { Link, Outlet } from "react-router-dom";
export default function About() {
  return (
    <div>
      
           
        
         <div className="home h-150 flex flex-col gap-5 justify-center items-center text-center ">
           <Outlet />
                <h1 className='font-bold font-serif'>Wellcome to Your Store !</h1>
                <div className="">
                    <img src={aboutim} className='w-50'/>
                </div>
                <p>We truly value what we do,
              and we put a lot of heart into it!</p>
            </div>
    </div>
  )
}
