import { Container, Col, Row } from "reactstrap";
import "../style/services.css";
const Services = () => {
  const IconInfo = [
    {
      icon: "ri-truck-line",
      title: "Fast Dellvery",
      discription: " first delivery fast and effcient",
    },
    {
      icon: "ri-shopping-cart-2-line",
      title: "Free Dellvery",
      discription: "use the cart icon to shop now",
    },
    {
      icon: "ri-headphone-line online-support-icon",
      title: "Online Support",
      discription: " online-support available 24 / 7 ",
    },
    {
      icon: "ri-coupon-2-line",
      title: "Special Offers",
      discription: "special offers available today",
    },
  ];

  return (
    <Container>
      <Row>
        {IconInfo.map((ele, index) => (
          <Col lg="" key={index}>
            <div className="services">
              <i className={ele.icon}></i>
              <h3>{ele.title}</h3>
              <p>{ele.discription}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Services;
