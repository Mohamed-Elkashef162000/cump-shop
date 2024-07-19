import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import "../style/home.css";
import { Link } from "react-router-dom";
import ProductList from "../UI/ProductList";
import { useState, useEffect } from "react";
import localProducts from "../data/Products";
import BigCard from "../UI/BigCard";
import BackCard from "../UI/BackCard";
import Services from "../UI/Services";
import BestPc2024 from "../Imges/PC.png";
import useGetData from "../custom-hooks/useGetData";
import { useContext } from "react";
import { contextValue } from "../data-changed/ProviderValue";
const Home = () => {
  const { value } = useContext(contextValue);
  const {
    data: productsFirebase,
    loading,
    setLoading,
  } = useGetData("products");

  let productsUse;
  useEffect(() => {
    if (value === "firebase") {
      productsUse = productsFirebase;
    } else {
      productsUse = localProducts;
      setLoading(false);
    }
  }, [value, productsFirebase]);
  const [dataStale, setDataStale] = useState([]);
  const [dataFeatured, setDataFeatured] = useState([]);
  const [dataArrivals, setDataArrivals] = useState([]);
  useEffect(() => {
    const filterdataStale = productsUse.filter((ele) => ele.ratings > 4.5);
    setDataStale(filterdataStale);

    const filterdataFeatured = productsUse.filter(
      (ele) => ele.ratings > 4 && ele.ratings <= 4.5
    );
    setDataFeatured(filterdataFeatured);
    const filterdataArrivals = productsUse.filter((ele) => ele.ratings <= 1);
    setDataArrivals(filterdataArrivals);
  }, [productsUse]);

  const year = new Date().getFullYear();

  return (
    <>
      <Helmet title={"Home"}>
        <section className="hero_section">
          <Container>
            <Row>
              <Col lg="6" md="6">
                <div className="hero_content">
                  <h2>The Best Computer Collection {year}</h2>

                  <h5>
                    Exclusive offer <span> -35%</span> of the week
                  </h5>

                  <button className="home_btn">
                    <Link to="/cump-shop/shop"> SHOP NOW</Link>
                    <i className="ri-arrow-right-line"></i>
                  </button>
                </div>
              </Col>

              <Col lg="6" md="6">
                <div className="hero_img">
                  <img src={BestPc2024} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="sale_products">
          <Container>
            <Row>
              <Col lg="12">
                <div className="flash_item">
                  <div className="flash_text">
                    <h3>Flash sale</h3>
                    <h2>
                      Flash sale of<span> the day</span>
                    </h2>
                  </div>
                  <div className="Arrow_icon">
                    <span>
                      <i className="ri-arrow-left-line"></i>
                    </span>
                    <span>
                      <i className="ri-arrow-right-line"></i>
                    </span>
                  </div>
                </div>
              </Col>

              {loading && <h2 className="fs-1">Loading......</h2>}

              <ProductList data={dataStale} />
            </Row>
            <BigCard />
          </Container>
        </section>

        <section className="featured_products">
          <Container>
            <Row>
              <Col lg="12">
                <div className="featured_item">
                  <div className="featured_text">
                    <h3>Featured</h3>
                    <h2>
                      Featured<span> Products</span>
                    </h2>
                  </div>
                  <button>
                    <Link to="/cump-shop/shop">
                      view all <i className="ri-arrow-left-line"></i>
                    </Link>
                  </button>
                </div>
              </Col>

              {loading && <h2 className="fs-1">Loading......</h2>}

              <ProductList data={dataFeatured} />
            </Row>
          </Container>
        </section>
        <section className="card_back">
          <Container>
            <Row>
              <BackCard />
            </Row>
          </Container>
        </section>

        <section className="Arrivals">
          <Container>
            <Row>
              <Col lg="12">
                <h4 className="text-center">Arrivals</h4>
                <h2 className="text-center"> New Arrivals</h2>
              </Col>

              {loading && <h2 className="fs-1">Loading......</h2>}

              <ProductList data={dataArrivals} />

              <Col lg="12">
                <div className="Arrow_icon mt-5">
                  <span className="p-6">
                    <i className="ri-arrow-left-line"></i>
                  </span>
                  <span>
                    <i
                      className="ri-arrow-right-line "
                      style={{ color: "var(--basic-color)" }}
                    ></i>
                  </span>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="services">
          <Services />
        </section>
      </Helmet>
    </>
  );
};

export default Home;
