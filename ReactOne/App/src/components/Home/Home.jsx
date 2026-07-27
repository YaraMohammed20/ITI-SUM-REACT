import React from "react";
import Btn from "../Btn/Btn";
import homeImg from "../../imgs/home.jpg";

export default function Home() {
  return (
    <div
      className="h-fit bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${homeImg})`,
      }}
    >
      <div className="content text-white flex flex-col justify-center items-start gap-5 py-60 px-10 font-bold font-serif">
        <h2 className="text-xl">WELCOME</h2>
        <h1 className="text-4xl">Origin Bakes and Beans</h1>
        <p>
          We are committed to the utmost exquisite flavor. We are engaged to
          unravel a deeper narration to espresso enthusiasts.
        </p>
        <Btn />
      </div>
    </div>
  );
}
