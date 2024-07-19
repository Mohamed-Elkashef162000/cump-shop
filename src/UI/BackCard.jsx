import { Col } from "reactstrap";
import "../style/back-card.css";
import Picture from "../data/DataImge/Picture6.png";
import { Link } from "react-router-dom";
const BackCard = () => {
  return (
    <div className="Card">
      <Col lg="4 ">
        <div className="text">
          <h3> 10% BACK</h3>
          <div>
            <h2>BE THE FIRST TO OWN</h2>
            <h4> NOW $950</h4>
          </div>
        </div>
      </Col>
      <Col lg="4">
        <div className="img">
          <img src={Picture} alt="" />
          <img src={Picture} alt="" />
        </div>
      </Col>
      <Col lg="4">
        <div className="btn_card">
            <button> <Link to={`/cump-shop/shop/${6}`}>Shop Collection</Link></button>
        </div>
      </Col>
    </div>
  );
};

export default BackCard;
