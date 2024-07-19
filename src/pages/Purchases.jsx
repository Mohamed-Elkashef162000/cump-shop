import "../style/purchases.css";
import Helmet from "../components/Helmet/Helmet";
import { Container, Col, Row } from "reactstrap";
import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { useEffect } from "react";
const Purchases = () => {
  const cartItems = useSelector((state) => state.cart.cartItem);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  useEffect(()=>{
    window.scrollTo(0,0)
  },[cartItems])
  return (
    <Helmet title="Cart">
      <section className="shoppingCarImage">
        <Container>
          <Row>
            <Col lg="12"></Col>
            <Col lg="12">
              {cartItems.length === 0 ? (
                <h1 className="not-products">Thare are Not Products</h1>
              ) : (
                <table className="table ">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Name</th>
                      <th className="text-center">Price</th>
                      <th className="text-center">Quantity</th>
                      <th className="text-center">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((ele) => (
                      <Tr ele={ele} key={ele.id} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg="12"> 
              <div
                style={
                  cartItems.length === 0
                    ? { display: "none" }
                    : { display: "block" }
                }
                className="totalAmount"
              >
                <h3>$ {Math.floor(totalAmount)}</h3>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
const Tr = ({ ele }) => {
  const dispatch = useDispatch();
  const alert = () => {
    Swal.fire({
      title: `Are you sure to delete ${ele.productName}`,
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonColor: "#bb2424",
    }).then((data) => {
      if (data.isConfirmed) {
        dispatch(dispatch(cartActions.deleteItem(ele.id)));
      }
    });
  };
  return (
    <tr>
      <td>
        <img src={ele.image} alt="" />
      </td>
      <td>{ele.productName}</td>
      <td className="text-center">$ {ele.totalPrice}</td>
      <td className="text-center">{ele.quantity}</td>
      <td className="text-center">
        <motion.i
          whileTap={{ scale: 1.2 }}
          onClick={alert}
          className="ri-delete-bin-line"
        ></motion.i>
      </td>
    </tr>
  );
};

export default Purchases;
