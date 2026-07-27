import React from 'react'

export default function Btn() {
  return (
    <div className='flex gap-3 justify-between'> 
      <button
              className=" border-orange-300 border bg-amber-500 px-6 py-2 text-white transition hover:bg-transparent hover:text-amber-500"
            >
              See More
            </button>

            <button
              className=" border-orange-300 border bg-transparent px-6 py-2 text-amber-500 transition hover:bg-amber-500 hover:text-white"
            >
              Contact
            </button>
    </div>
  )
}
