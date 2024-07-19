import { Container, Col, Row, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import "../style/login.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Swal from "sweetalert2";
const Logoin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const Navgate = useNavigate("/");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const signIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Account created successfully!",
        cancelButtonText: "",
      });
      Navgate("/cump-shop/shop");
    } catch (error) {
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Error Network",
        cancelButtonText: "",
        confirmButtonColor: "#bb2424",
      });
    }
  };
  return (
    <>
      <Helmet title="Login">
        <section>
          <Container>
            <Row>
              <Col lg="5" className="m-auto text-center">
                <Form className="form" onSubmit={signIn}>
                  {loading ? (
                    <h3 style={{ color: "var(--yellow-color)" }}>
                      Loading ....
                    </h3>
                  ) : (
                    <h3>Login</h3>
                  )}

                  <FormGroup className="form-group">
                    <input
                      type="email"
                      placeholder="enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <input
                      type="password"
                      placeholder="enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </FormGroup>

                  <button className="form-btn"> Create an account</button>
                  <p>
                    Don't have an account ?
                    <Link to="/cump-shop/signup"> Create an account</Link>
                  </p>
                </Form>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  );
};

export default Logoin;
