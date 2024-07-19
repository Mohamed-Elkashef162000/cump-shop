import { Col } from "reactstrap";
import "../style/product-card.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import Swal from "sweetalert2";
import useAuth from "../custom-hooks/useAuth";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ props }) => {
  const endPrice = Math.floor(
    props.FirstPrice - (props.FirstPrice * props.sale) / 100
  );
  const navgation = useNavigate("");
  const dispatch = useDispatch();
  const { currentUser } = useAuth();
  const alert = () => {
    Swal.fire({
      title: `Are you sure to added ${props.productName}`,
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonColor: "#2c9cba",
    }).then((data) => {
      if (data.isConfirmed) {
        dispatch(
          cartActions.addItem({
            id: props.id,
            productName: props.productName,
            Price: props.sale ? endPrice : props.FirstPrice,
            imgURL: props.imgURL,
          })
        );
      }
    });
  };
  return (
    <Col lg="3" md="6">
      <motion.div whileHover={{ scale: 1.1 }} className="card_item ">
        <div
          className="sale"
          style={
            props.sale ? { visibility: "visible" } : { visibility: "hidden" }
          }
        >
          <h4>sale {props.sale} %</h4>
        </div>

        <div className="img_card">
          <img src={props.imgURL} alt="" />
        </div>
        <Link to={`/cump-shop/shop/${props.id}`}>
          {props.productName.slice(0, 30)}....
        </Link>
        <div className="info_price">
          {props.sale && <h6>$ {endPrice}</h6>}
          <h6 style={props.sale ? null : { color: "#f9c405" }}>
            $ {props.FirstPrice}
          </h6>
          <div
            className="icon"
            onClick={() => (currentUser ? alert() : navgation("/cump-shop/login"))}
          >
            <i className="ri-add-line"></i>
          </div>
        </div>
      </motion.div>
    </Col>
  );
};
export default ProductCard;
