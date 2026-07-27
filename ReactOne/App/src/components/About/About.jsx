import React from "react";
import aboutImg from "../../imgs/about.jpg";

export default function About() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center py-10"
      style={{ backgroundImage: `url(${aboutImg})` }}
    >
      <div className="max-w-3xl flex flex-col justify-center items-center  text-white px-6">
        <h5 className=" font-semibold text-2xl mb-4">
          Origin Bakes
        </h5>

        <p className="mb-4">
          Step into the heart of Origin Bakes and Beans, where the air is
          filled with the aroma of freshly baked goodies, and where each and
          every delight is a marvel of flavor and artistry. Our bakery is a
          haven for those individuals who revere the art of baking and long for
          the uncomplicated pleasures that come from a pastry that has been
          expertly prepared.
        </p>

        <p>
          An intriguing array of delicacies will be waiting for you as soon as
          you walk through the door. These treats range from rich cakes and
          exquisite macarons to flaky croissants and buttery scones. Each item
          is painstakingly made by our skilled bakers using only the
          highest-quality ingredients.
        </p>
        <button className=" border-orange-300 border bg-transparent px-6 py-2 text-amber-500 transition hover:bg-amber-500 hover:text-white" type="">See More</button>
        
      </div>
    </div>           

  );
}