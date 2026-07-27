import React from "react";
import Navimg from "../../imgs/kkkk.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12">
      <div className="container mx-auto px-6  ">
        <div className="upper flex flex-col lg:flex-row justify-between items-start lg:items-start gap-12">
          <div className="flex flex-col justify-start items-start gap-4 mb-5">
            <img src={Navimg} alt="Logo" className="w-30" />
            <p>We truly value what we do,
              and we put a lot of heart into it!
            </p>
          </div>

          <div className="sec flex flex-col justify-start items-start gap-1">
            <h2 className="font-bold">Important Links</h2>
            <a href="#" className="hover:text-amber-200">About us</a>
            <a href="#" className="hover:text-amber-200">Origin Bakes</a>
            <a href="#" className="hover:text-amber-200">Origin Beans</a>
            <a href="#" className="hover:text-amber-200">Contact Us</a>
          </div>

          <div className="sec flex-col justify-start items-start gap-4 ">
            <h2 className="font-bold">SUBSCRIBE NEWSLETTER</h2>
            <p>Subscribe now to show the best offers!</p>
            <div className="send flex justify-start items-start gap-4 ">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-md border border-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <button className="rounded-full border-orange-300 border hover:bg-transparent px-6 py-2 hover:text-amber-500 transition bg-amber-500 text-white" type="">Send</button>
            </div>
          </div>
        </div>


        <div className="mt-12 border-t border-cyan-700 py-6 m-auto">
          <p className="text-sm text-center ">
            Copyright © 2024. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}