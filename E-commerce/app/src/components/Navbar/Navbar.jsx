import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
  ];

  return (
    <nav className="bg-black text-white w-full top-0">
      <div className="w-full px-5 h-20 flex items-center justify-between">

        <Link to="/" className="text-2xl font-extrabold font-serif"> STORE </Link>

        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:text-gray-400 transition"
            >
              {link.name}
            </Link>
          ))}

          <button className="rounded-full border border-white bg-white text-black px-6 py-2 hover:bg-black hover:text-white transition">Contact</button>
        </div>
          <button className="md:hidden text-2xl" onClick={() => setOpen(!open)} >{open ? <FaXmark /> : <FaBars />}</button>
      </div>

      {open && (
        <div className="md:hidden bg-black border-t border-gray-700 px-5 py-5 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className="hover:text-gray-400"
            >
              {link.name}
            </Link>
          ))}
          <button className="border border-white px-5 py-2 hover:bg-white hover:text-black transition">Contact</button>
        </div>
      )}
    </nav>
  );
}