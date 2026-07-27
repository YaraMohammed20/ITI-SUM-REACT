import React from 'react'
import Btn from '../Btn/Btn'

export default function Home() {
  return (
    <div>
      <div className="h-fit bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('src/imgs/home.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="content text-white flex flex-col justify-center items-start gap-5 py-60 font-bold px-10 font-serif ">
          <h2 className='text-xl'>WELCOME</h2>
          <h1 className='text-4xl'>Origin Bakes and Beans</h1>
          <p> we are committed to the utmost exquisite flavor. We are engaged to unravel a deeper narration to espresso enthusiasts</p>
          <Btn />
        </div>
      </div>
    </div>
  )
}
