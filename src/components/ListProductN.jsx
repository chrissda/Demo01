import ProductCardN from "./ProductCardN";

const ListProductN = ({ products }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-3 flex justify-between">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          { products ? products.map((product) => (
						<ProductCardN key={product.id} product={product} />
					)) : (<p>No se encontro productos</p>)
					}
        </div>
      </div>
    </div>
  );
};

export default ListProductN;