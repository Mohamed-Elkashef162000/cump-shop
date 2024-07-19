import { Container, Col, Row } from "reactstrap";
import HPimge from "../Imges/PC.png";
import AmdImge from "../data/DataImge/AMD.png";
import { Link } from "react-router-dom";
import "../style/bigcard.css";
const BigCard = () => {
  return (
    <div className="Big_card">
      <Container>
        <Row>
          <Col lg="8">
            <div className="device_hp">
              <div className="hp_text">
                <h4>
                  Sale <span> 20% </span>of all store
                </h4>
                <h2>
                  HP Pro 240 G9 <span> Core i3 12th</span>
                  <br></br> Gen Desktop PC
                </h2>
                <Link to={`/cump-shop/shop/${2024}`}>
                  Shop Now<i className="ri-arrow-left-line"></i>
                </Link>
              </div>
              <div className="img">
                <img src={HPimge} alt="" />
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div className="device_Amd">
              <div className="Amd_text">
                <h4>
                  Sale <span> 20% </span>of all store
                </h4>
                <h2>
                  AMD Ryzen 5 5600G <br></br> <span>Gaming Desktop PC</span>
                </h2>
              </div>
              <div className="Amd_img">
                <Link to={`/cump-shop/shop/${13}`}>
                  Shop Now<i className="ri-arrow-right-line"></i>
                </Link>
                <img src={AmdImge} alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default BigCard;
