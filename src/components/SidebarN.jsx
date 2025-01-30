import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";
import { DiStreamline } from "react-icons/di";
import { IoSettingsOutline, IoStatsChartSharp, IoSearch, IoAddCircleOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { GoHome } from "react-icons/go";
import { Link, NavLink } from "react-router-dom";

const SidebarN = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      <div className={`bg-indigo-900 h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>
        {/* <BsArrowLeftShort className={`bg-indigo-100 text-indigo-900 text-3xl rounded-full absolute -right-3 top-9 border border-gray-900 cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} /> */}
        <FaAngleLeft className={`text-indigo-200 text-2xl absolute -right-0.5 top-9 mt-2 cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />
        {/* <FaAnglesLeft className={`text-indigo-600 text-2xl absolute -right-1 top-9 cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} /> */}
        <div className="inline-flex mb-10">
          <DiStreamline className={`text-white text-5xl block float-left mr-2 duration-300 ${open && "rotate-[360deg]"}`} />
          <h1 className={`text-white origin-left font-medium text-2xl mt-1.5 duration-300 ${!open && "scale-0"}`}>Administrador</h1>
        </div>
        {/* <div className="block float-left flex-col mt-10"> */}
          <div className="inline-flex mt-5 w-56 cursor-pointer">
            <GoHome className={`text-white text-4xl block float-left ml-2 mr-1 mt-1 `} />
            <h2 className={`text-white origin-left font-medium text-xl mt-1.5 ml-1 duration-300 ${!open && "scale-0"}`}>Inicio</h2>
          </div>
          <div className="inline-flex mt-5 w-56 cursor-pointer">
            <IoSearch className={`text-white text-3xl block float-left ml-2.5 mr-1.5 mt-1`} />
            <h1 className={`text-white origin-left font-medium text-xl mt-1 ml-2 duration-300 ${!open && "scale-0"}`}>Buscar Producto</h1>
          </div>
          <div className="inline-flex mt-5 w-56 cursor-pointer">
            <IoAddCircleOutline className={`text-white text-3xl block float-left ml-2.5 mr-1.5 mt-1 duration-300 ${open && "rotate-[360deg]"}`} />
            <h2 className={`text-white origin-left font-medium text-xl mt-1 ml-2 duration-300 ${!open && "scale-0"}`}>Crear Producto</h2>
          </div>
          <div className="inline-flex mt-5 w-56 cursor-pointer">
            <IoStatsChartSharp className={`text-white text-3xl block float-left ml-2.5 mr-2 mt-1`} />
            <h2 className={`text-white origin-left font-medium text-xl mt-1 ml-2 duration-300 ${!open && "scale-0"}`}>Estadísticas</h2>
          </div>
          <div className="inline-flex mt-5 w-56 cursor-pointer">
            <IoSettingsOutline className={`text-white text-3xl block float-left ml-2.5 mr-2 mt-1 duration-300 ${open && "rotate-[360deg]"}`} />
            <h2 className={`text-white origin-left font-medium text-xl mt-1 ml-2 duration-300 ${!open && "scale-0"}`}>Settings</h2>
          </div>
        </div>
      {/* </div> */}
      {/* <div className="p-7">
        <h1 className="text-3xl font-medium">Página inicio</h1>
      </div> */}
    </div>
  );
};

export default SidebarN;