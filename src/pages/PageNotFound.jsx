import { Container, Col, Row } from "reactstrap";
const PageNotFound = () => {
  return (
    <section
      style={{ height: "44vh",backgroundColor:'var(--primary-color)' }}
      className="d-flex justify-content-center align-items-center"
    >
      <Container>
        <Row>
          <Col lg="12">
            <div className=" d-flex justify-content-center align-items-center">
              <h1
                style={{ color: "#fff" }}
                className="fs-1 fw-bold"
              >
                PAGE IS NOT FOUND
              </h1>
              <i
                style={{ color: "red" }}
                className="ri-error-warning-fill fs-1 ps-2"
              ></i>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PageNotFound;
