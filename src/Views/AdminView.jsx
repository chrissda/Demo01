import { Link } from "react-router-dom";
import SidebarN from "../components/SidebarN";
import TableProducts from "../components/TableProducts";

const AdminView = () => {
  return (
    <section className="bg-indigo-200 h-screen" id="admin">
      <div className="flex">
        <div>
          <SidebarN />
        </div>
        <div className="flex-1 w-full mx-10 my-10">
          <div className="text-3xl font-semibold text-indigo-900">
            <h1>Tabla de productos disponibles</h1>
          </div>
          <div className="mt-5">
            <TableProducts />
          </div>
          <div className="mt-10">
            <Link to="/nuevo" className="w-full text-white bg-indigo-700 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-lg px-5 py-2.5 text-center dark:hover:bg-primary-700 dark:focus:ring-primary-800">Agregar producto</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminView;