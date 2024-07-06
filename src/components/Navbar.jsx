import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";


const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => setMenu(!menu);


  const animation = () => {
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-indigo-900">
      <ul className="text-center text-xl p-20">
        <Link spy={true} smooth={true} to="Inicio">
          <li className="my-4 py-5 border-b- border-indigo-700 hover:bg-indigo-800">Inicio</li>
        </Link>
        <Link spy={true} smooth={true} to="Productos">
          <li className="my-4 py-5 border-b- border-indigo-700 hover:bg-indigo-800">Productos</li>
        </Link>
        <Link spy={true} smooth={true} to="About">
          <li className="my-4 py-5 border-b- border-indigo-700 hover:bg-indigo-800">About</li>
        </Link>
        <Link spy={true} smooth={true} to="Login">
          <li className="my-4 py-5 border-b- border-indigo-700 hover:bg-indigo-800">Login</li>
        </Link>
        <Link spy={true} smooth={true} to="Register">
          <li className="my-4 py-5 border-b- border-indigo-700 hover:bg-indigo-800">Register</li>
        </Link>
      </ul>

    </div>
  }
  
  return (
    <nav className="bg-indigo-900">
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4">
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold">Chriss</span>
        </div>
        <div className="lg;flex md:flex lg: flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link spy={true} smooth={true} to="Inicio">
                <li className="hover:text-amber-500 transition border-b-2 border-indigo-900 hover:border-amber-500 cursor-pointer">Inicio</li>
              </Link>
              <Link spy={true} smooth={true} to="Productos">
                <li className="hover:text-amber-500 transition border-b-2 border-indigo-900 hover:border-amber-500 cursor-pointer">Productos</li>
              </Link>
              <Link spy={true} smooth={true} to="About">
                <li className="hover:text-amber-500 transition border-b-2 border-indigo-900 hover:border-amber-500 cursor-pointer">About</li>
              </Link>
              <Link spy={true} smooth={true} to="Login">
                <li className="hover:text-amber-500 transition border-b-2 border-indigo-900 hover:border-amber-500 cursor-pointer">Login</li>
              </Link>
              <Link spy={true} smooth={true} to="Register">
                <li className="hover:text-amber-500 transition border-b-2 border-indigo-900 hover:border-amber-500 cursor-pointer">Register</li>
              </Link>
            </ul>
          </div>
        </div>
        <div>
          { menu && animation }
        </div>
        <button className="block sm:hidden " onClick={handleMenu}>
          { menu ? <FaTimes /> : <CiMenuFries /> }
        </button>
      </div>
    </nav>
  )
}

export default Navbar;