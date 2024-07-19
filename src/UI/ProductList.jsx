import ProductCard from "./ProductCard";

const ProductList = ({ data }) => {
  return (
    <>
      {data.map((ele ,index) => (
        <ProductCard key={ele.id} props={ele} />
      ))}
     
    </>
  );
};
export default ProductList;
