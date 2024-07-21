import CommonSection from "../UI/CommoSection";
import { useEffect, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Col, Row } from "reactstrap";
import "../style/shop.css";
import localProducts from "../data/Products";
import ProductList from "../UI/ProductList";
import useGetData from "../custom-hooks/useGetData";
import { useContext } from "react";
import { contextValue } from "../data-changed/ProviderValue";
const Shop = () => {
  const { value } = useContext(contextValue);
  const { data: productsFirebase, loading ,setLoading } = useGetData("products");

  const [productsData, setProductsData] = useState(localProducts);
  let productsUse = value === "firebase" ? productsFirebase : localProducts;
  useEffect(() => {
    if (value === "firebase") {
      setProductsData(productsFirebase);
    } else {
      setProductsData(localProducts);
      setLoading(false)
    }
  }, [value, productsFirebase]);

  const search = (e) => {
    const searchValue = e.target.value;
    const searchproductsData = productsUse.filter((ele) =>
      ele.category.toLowerCase().includes(searchValue.toLowerCase())
    );
    setProductsData(searchproductsData);
  };
  const handelFilter = (e) => {
    const filterValue = e.target.value;

    if (filterValue === "All") {
      setProductsData(productsUse);
    }

    if (filterValue === "Desktop") {
      const filterProduct = productsUse.filter((ele) =>
        ele.category.startsWith("Desktop")
      );
      setProductsData(filterProduct);
    }

    if (filterValue === "Screen") {
      const filterProduct = productsUse.filter((ele) =>
        ele.category.startsWith("Screen")
      );
      setProductsData(filterProduct);
    }
    if (filterValue === "Mouse") {
      const filterProduct = productsUse.filter((ele) =>
        ele.category.startsWith("Mouse")
      );
      setProductsData(filterProduct);
    }
    if (filterValue === "Keyboard") {
      const filterProduct = productsUse.filter((ele) =>
        ele.category.startsWith("Keyboard")
      );
      setProductsData(filterProduct);
    }
    if (filterValue === "Motherboard") {
      const filterProduct = productsUse.filter((ele) =>
        ele.category.startsWith("Motherboard")
      );
      setProductsData(filterProduct);
    }
    if (filterValue === "GeFonce") {
      const filterProduct = productsUse.filter((ele) =>
        ele.category.startsWith("GeFonce")
      );
      setProductsData(filterProduct);
    }
    if (filterValue === "Power-Supply") {
      const filterProduct = productsUse.filter((ele) =>
        ele.category.startsWith("Power-Supply")
      );
      setProductsData(filterProduct);
    }
    if (filterValue === "Chair") {
      const filterProduct = productsUse.filter((ele) =>
        ele.category.startsWith("Chair")
      );
      setProductsData(filterProduct);
    }
    if (filterValue === "Hard") {
      const filterProduct = productsUse.filter((ele) =>
        ele.category.startsWith("Hard")
      );
      setProductsData(filterProduct);
    }
  };
  return (
    <Helmet title="Shop">
      <CommonSection />
      <section>
        <Container>
          <Row>
            <Col lg="4" md="12">
              <div className="filter">
                <select className="w-50 " onChange={handelFilter}>
                  <option value="All">All</option>
                  <option value="Desktop">Desktop</option>
                  <option value="Screen">Screen</option>
                  <option value="Mouse">Mouse</option>
                  <option value="Keyboard">Keyboard</option>
                  <option value="Motherboard">Motherboard</option>
                  <option value="GeFonce">GeFonce</option>
                  <option value="Power-Supply">Power-Supply</option>
                  <option value="Chair">Chair</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>
            </Col>
            <Col lg="8" md="12">
              <div className="search_box">
                <input type="text" placeholder="Search..." onChange={search} />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            {loading ? (
              <h2>Lpading....</h2>
            ) : productsData.length === 0 ? (
              <h1 className="text-center">THERE ARE NOT productsData</h1>
            ) : (
              <ProductList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
