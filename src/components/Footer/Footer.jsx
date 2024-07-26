import { Container, Col, Row } from "reactstrap";
import logo from "../../Imges/Logo-1.png";
import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <section className=" footer">
        <Container>
          <Row>
            <Col lg="4">
              <div className="footer_logo">
                <div>
                  <img src={logo} alt="...loading" />
                  <h1>
                    <span>CUM</span> SHOP
                  </h1>
                </div>
              </div>
              <p className="logo_text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptas asperiores tempora quasi obcaecati qui illum corporis
                vitae veritatis. Dolorem ullam quos deserunt recusandae ea sint
                accusamus possimus. A, omnis facere?Lorem ipsum dolor sit amet
                Lorem.
              </p>
            </Col>
            <Col lg="2">
              <div className="links">
                <h2>Other Links</h2>
                <ul>
                  <li>
                    <Link>Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link>Termo Of Services</Link>
                  </li>
                  <li>
                    <Link>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link>Frequently Asked</Link>
                  </li>
                  <li>
                    <Link>sit Map</Link>
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg="2">
              <div className="follow">
                <h2>Follow Me</h2>
                <ul>
                  <li>
                    <Link>Facebook</Link>
                  </li>
                  <li>
                    <Link>Instagram</Link>
                  </li>
                  <li>
                    <Link>Twiter</Link>
                  </li>
                  <li>
                    <Link>Pinterest</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg="4">
              <div className="contact">
                <h2>Contact us</h2>
                <div className="phone">
                  <span>
                    <i className="ri-phone-fill"></i>
                  </span>
                  <div>
                    <p>Phone</p>
                    <h3> (00) 875 784 568</h3>
                  </div>
                </div>

                <div className="email">
                  <span>
                    <i className="ri-mail-fill"></i>
                  </span>
                  <div>
                    <p>Email</p>
                    <h3>Info @gamil.com </h3>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="copyright">
        <Container>
          <Row>
            <div className="info">
              <Col lg="6">
                <h2>Copyright 2024 Mohamed Elkashef </h2>
              </Col>
              <Col lg="3">
                <Link to="https://www.facebook.com/profile.php?id=100014297746934&mibextid=ZbWKwL">
                  <i className="ri-facebook-fill"></i>
                </Link>

                <Link to="https://wa.me/+201095431378">
                  <i className="ri-whatsapp-fill"></i>
                </Link>

                <Link to="mailto://wa.me/elkashef204@gamil.com">
               
                  <i className="ri-mail-fill"></i>
                </Link>
              </Col>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Footer;
