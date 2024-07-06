import ListProductN from "../components/ListProductN";
//import NavbarN from "../components/NavbarN";
import useAxios from "../hooks/useAxios";
import CarouselN  from "../components/CarouselN";
import NavbarN from "../components/NavbarN";


const AllProductsView = () => {
  const URL = import.meta.env.VITE_ENDPOINT_BASE;
  
  const { data, error, loading } = useAxios(`${URL}/productos`);

  return (
    <div>
      {/* <NavbarN /> */}
      <div className="w-[80%] m-auto pt-4">
        <CarouselN />
      </div>
      <ListProductN products={data} />      
    </div>
  );
};

export default AllProductsView;
