import { NavLink } from "react-router-dom";


const HomeN = () => {
  return (
    <div className="grid grid-cols-1 items-center justify-center text-center">
      <div className="text-gray-800 text font-semibold text-2xl">
        Bienvenido a Chriss Store
      </div>
      <NavLink 
        className="bg-orange-600 text-white"
        to="/"
      >
        Ir al store
      </NavLink>
    </div>
  );
};

export default HomeN;
