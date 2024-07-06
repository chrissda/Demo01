import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
//import { Menu, X } from "lucide-react";
//import { Button } from "react-scroll";



const NavbarN = () => {
	const [BOpen, setBOpen] = useState(false);
		
	// funcion clic abrir y cerrar menu
	const menuBtnNav = () => {
		setBOpen(!BOpen);
	};
	
	return (
    <>
			{/* div principal del navbar */}
			<div className="flex w-full flex-wrap sticky top-0 z-[20]">
				{/* contenedor navbar */}
				<div className="grid w-full grid-cols-3 bg-gradient-to-r from-cyan-500 to-indigo-600 h-20 items-center text-white hover:bg-gradient-to-bl">
					{/* Col 1 */}
					<div className="hidden md:flex justify-center pl-10 pr-20  hover:text-sky-300">
						<div className="text-center text-3xl font-semibold  hover:text-orange-400 ease-in duration-300">
							<NavLink to="/home"><i className="fa-solid fa-hurricane mr-2"></i>Chriss Store</NavLink>
						</div>
					</div>
					{/* Col 2 - opciones de navegacion */}
					<div className="hidden md:flex h-16 items-center justify-end gap-4 font-semibold">
						<div className="hover:text-orange-400 ease-in duration-300"><NavLink to="/">Inicio</NavLink></div>
						<div className="hover:text-orange-400 ease-in duration-300"><NavLink to="/">Productos</NavLink></div>
						<div className="hover:text-orange-400 ease-in duration-300"><NavLink to="/contact">Contacto</NavLink></div>
						{/* <div className="hover:text-orange-400 ease-in duration-300"><NavLink to="/">Registrarse</NavLink></div> */}
					</div>
					{/* Col 3 - carrito y login */}
					<div className="hidden md:flex justify-center items-center border-r-0 gap-4 pr-10">
						<Link className="text-yellow-300 text-xl px-1 py-1 md:flex justify-end" to="/cart">
							<i className="fa-solid fa-cart-shopping"></i>
						</Link>
						<div className="flex gap-0.5">
							<NavLink className="px-5 py-1 bg-indigo-700 hover:outline hover:outline-2 hover:outline-sky-500 rounded-l-xl ease-in duration-300" 
								to="/login">Login</NavLink>
							<NavLink className="px-4 py-1 bg-indigo-700 hover:outline hover:outline-2 hover:outline-sky-500 rounded-r-xl ease-in duration-300" 
								to="/login">Register</NavLink>
						</div>
					</div>
					{/* renderizado boton barras/menu, boton X y Login */}
					<div className="absolute right-0 sm:hidden md:hidden flex justify-end pr-10 gap-2">
						<div className="flex">
							<NavLink className="px-5 py-1 bg-indigo-700 hover:outline hover:outline-2 hover:outline-sky-500 rounded-l-xl ease-in duration-300" to="login">Login</NavLink>
						</div>
						<button className="block sm:hidden" onClick={menuBtnNav}>
							{/* {BOpen ? <X className="size-8" /> : <Menu className="size-8" />} */}
							{BOpen ? <i class="fa-solid fa-x text-2xl pl-1"></i> : <i class="fa-solid fa-bars text-2xl"></i>}
						</button>
					</div>
					{/* renderizado CS */}
					<div className="absolute left-0 md:hidden flex justify-start pl-10 text-3xl font-semibold hover:text-orange-400 ease-in duration-300">
						<NavLink to="/home"><i className="fa-solid fa-hurricane mr-0.5" to="/"></i>CS</NavLink>
					</div>
				</div>
				{BOpen && (
					<div className="w-full sm:hidden md:hidden">
						{/* renderizado de opciones menu */}
						<div className="grid grid-cols-1 text-center bg-sky-700 text-white pl-2 pr-2 gap-2 pb-2 pt-2 font-semibold">
							<div className="hover:bg-sky-400 rounded-md py-2 ease-in duration-200"><NavLink className="w-full" to="/">Inicio</NavLink></div>
							<div className="hover:bg-sky-400 rounded-md py-2 ease-in duration-200"><NavLink className="w-full" to="/">Productos</NavLink></div>
							<div className="hover:bg-sky-400 rounded-md py-2 ease-in duration-200"><NavLink className="w-full" to="/contact">Contacto</NavLink></div>
							<div className="hover:bg-sky-400 rounded-md py-2 ease-in duration-200"><NavLink className="w-full" to="/">Registrarse</NavLink></div>
						</div>
					</div>
				)}
			</div>
    </>
  );
};

export default NavbarN;
