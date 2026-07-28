import React from 'react'
import { Link } from "react-router-dom";
export default function Home() {
    return (
        <div>
            <div className="home h-150 flex flex-col gap-5 justify-center items-center text-center ">
                <h1 className='font-bold font-serif'>Wellcome to Your Store !</h1>
               <div className="buttons">
            <Link to="/Gallery" className="border rounded-xl border-black bg-black text-white px-5 py-2 hover:bg-white hover:text-black transition">Go Shopping</Link>
        </div>
            </div>
        </div>
    )
}
