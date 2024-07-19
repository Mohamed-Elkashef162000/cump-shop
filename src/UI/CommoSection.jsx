import { Container, Row, Col } from "reactstrap";
import "../style/common.css";
import Products from "../data/Products";
import { cartActions } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import useAuth from "../custom-hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const CommonSection = () => {
  const dispatch = useDispatch();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const filtering = Products.filter((ele) => ele.category === "card-shop");

  const alert = (ele) => {
    Swal.fire({
      title: `Are you sure to added ${ele.productName}`,
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonColor: "#2c9cba",
    }).then((data) => {
      if (data.isConfirmed) {
        dispatch(
          cartActions.addItem({
            id: ele.id,
            productName: ele.productName,
            Price: ele.FirstPrice,
            imgURL: ele.imgURL,
          })
        );
      }
    });
  };

  return (
    <section className="common_section">
      <Container>
        <Row>
          {filtering.map((ele) => (
            <Col lg="6" key={ele.id}>
              <div className="laptop">
                <div className="card_imge">
                  <img src={ele.imgURL} alt="" />
                </div>
                <div className="info">
                  <h4>Back {ele.cachBack} %</h4>
                  <h2>{ele.productName.slice(0, 15)}....</h2>
                  <ul>
                    <li> {ele.HardWare.Pro}</li>
                    <li>{ele.HardWare.hard}</li>
                    <li>{ele.HardWare.screen}</li>
                    <li>{ele.HardWare.ram}</li>
                  </ul>
                  <button
                    onClick={() =>
                      currentUser ? alert(ele) : navigate("/cump-shop/login")
                    }
                    className="buy_btn"
                  >
                    Add to
                  </button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CommonSection;
