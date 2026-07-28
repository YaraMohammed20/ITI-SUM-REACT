import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12">
      <div className="container mx-auto px-6  ">
        <div className="upper flex flex-col lg:flex-row justify-between items-start lg:items-start gap-12">
          <div className="flex flex-col justify-start items-start gap-4 mb-5">
           <h1 className="font-extrabold text-2xl font-serif">STORE</h1>
            <p>We truly value what we do,
              and we put a lot of heart into it!
            </p>
          </div>

          <div className="sec flex flex-col justify-start items-start gap-1">
            <h2 className="font-bold">Important Links</h2>
            <a href="#" className="hover:text-red-700">About us</a>
            <a href="#" className="hover:text-red-700">Origin Stuff</a>
            <a href="#" className="hover:text-red-700">Origin Electronics</a>
            <a href="#" className="hover:text-red-700">Contact Us</a>
          </div>

          <div className="sec flex-col justify-start items-start gap-5 ">
            <h2 className="font-bold">SUBSCRIBE NEWSLETTER</h2>
            <p>Subscribe now to show the best offers!</p>
            <div className="send flex justify-start items-start gap-4 m-2">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-md border border-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <button className="rounded-full border-white border hover:bg-transparent m-2 px-6 py-2 hover:text-white transition bg-white text-black" type="">Send</button>
            </div>
          </div>
        </div>


        <div className="mt-12 border-t border-white py-6 m-auto">
          <p className="text-sm text-center ">
            Copyright © 2026. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}