import { Container, Col, Row } from "reactstrap";
import { useParams, useNavigate } from "react-router-dom";
import localProducts from "../data/Products";
import ProductList from "../UI/ProductList";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../UI/CommoSection";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import "../style/productsInfo.css";
import { useEffect, useRef, useState } from "react";
import useAuth from "../custom-hooks/useAuth";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import useGetData from "../custom-hooks/useGetData";
import { useContext } from "react";
import { contextValue } from "../data-changed/ProviderValue";
const ProductInfo = () => {
  const [productFB, setProductFB] = useState({});
  const dispatch = useDispatch();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [selectStars, setSelectStars] = useState(0);
  const inputName = useRef("");
  const inputMesg = useRef("");
  const { id } = useParams();
  const { data: firebaseProducts, loading } = useGetData("products");
  const { value } = useContext(contextValue);
  let productsUse;
  let dataChanged;
  let product;
  if(value === 'firebase'){
    productsUse = firebaseProducts;
    product = productsUse.find((ele) => ele.id === id);
    dataChanged = productFB;
  }else{
    productsUse = localProducts
    product = productsUse.find((ele) => ele.id === id);
    dataChanged = product;
  }
  const { imgURL, productName, FirstPrice, description, category, ratings } =
    dataChanged;
  const similarProducts = productsUse.filter(
    (ele) => ele.category === category
  );

  const submitHandel = (e) => {
    e.preventDefault();
    const userName = inputName.current.value;
    const userMesg = inputMesg.current.value;
  };
  const docRef = doc(db, "products", id);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProductFB(docSnap.data());
        }
      } catch (e) {}
    };
    getProduct();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  const alert = () => {
    Swal.fire({
      title: `Are you sure to added ${product.productName}`,
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonColor: "#2c9cba",
    }).then((data) => {
      if (data.isConfirmed) {
        dispatch(
          cartActions.addItem({
            id,
            productName,
            Price: FirstPrice,
            imgURL,
          })
        );
      }
    });
  };
  return (
    <>
      <Helmet>
        <CommonSection />
        <section>
          <Container>
            <Row>
              <Col lg="6">
                <img src={imgURL} alt="" />
              </Col>
              <Col lg="6">
                <div className="product_details">
                  <h2>{productName}</h2>
                  <div className="product_raing">
                    <div className="ratigs_count">{<h4>{ratings}</h4>}</div>
                    {[...Array(5)].map((_, index) => {
                      return (
                        <span
                          key={index}
                          className={`${
                            index + 1 <= ratings ? "selected" : "noSlected"
                          }`}
                        >
                          &#9733;
                        </span>
                      );
                    })}
                  </div>
                  <h3> $ {FirstPrice}</h3>
                  <p>{description}</p>
                  <button
                    className="buy_btn"
                    onClick={() => (currentUser ? alert() : navigate("/cump-shop/login"))}
                  >
                    Add
                  </button>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <div className="product_review">
                  <form action="" onSubmit={submitHandel}>
                    <h2>Write Your Feedback</h2>
                    <div className="stars_count">
                      {[...Array(5)].map((_, index) => {
                        return (
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            key={index}
                            className={`${
                              index + 1 <= selectStars
                                ? "selected"
                                : "noSlected"
                            }`}
                            onClick={() => setSelectStars(index + 1)}
                          >
                            &#9733;
                          </motion.span>
                        );
                      })}

                      <div className="ratigs_count ms-5">
                        <h4> {selectStars} </h4>
                      </div>
                    </div>
                    <div className="form_grup">
                      <input
                        type="text"
                        placeholder="Enter name"
                        ref={inputName}
                      />
                    </div>

                    <div className="form_grup">
                      <textarea
                        rows={4}
                        type="text"
                        required
                        placeholder="Enter name"
                        ref={inputMesg}
                      />
                    </div>
                    <button className="buy_btn">Submit</button>
                  </form>
                </div>
              </Col>
              <h2
                className="pt-5 fs-3 "
                style={{ color: "var(--primary-color)" }}
              >
                Similar Products
              </h2>
              <ProductList data={similarProducts} />
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  );
};

export default ProductInfo;
