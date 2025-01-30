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
            <h1>Tabla de productos</h1>
          </div>
          <div className="">
            <TableProducts />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminView;