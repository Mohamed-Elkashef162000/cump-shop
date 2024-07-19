import { Container, Col, Row, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import "../style/login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";
import { auth, storage, db } from "../firebase";
import Swal from "sweetalert2";
import useAuth from "../custom-hooks/useAuth";
const Signup = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Updated function name
  const { currentUser } = useAuth();
  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const storageRef = ref(storage, `images/${Date.now()}_${userName}`);
      console.log(user);
      console.log(currentUser);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        null,
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Something went wrong during file upload.",
            cancelButtonText: "",
            confirmButtonColor: "#bb2424",
          });
          setLoading(false);
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            await updateProfile(user, {
              displayName: userName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              displayName: userName,
              email,
              photoURL: downloadURL,
            });
            setLoading(false);
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Account created successfully!",
              cancelButtonText: "",
            });
            navigate("/cump-shop/login"); // Move navigation here
          } catch (error) {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "Failed to get the download URL.",
              cancelButtonText: "",
              confirmButtonColor: "#bb2424",
            });
            setLoading(false);
          }
        }
      );
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong during account creation.",
        cancelButtonText: "",
        confirmButtonColor: "#bb2424",
      });
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet title="Login">
        <section>
          <Container>
            <Row>
              <Col lg="5" className="m-auto text-center">
                <Form className="form" onSubmit={signup}>
                  {loading ? (
                    <h3 style={{ color: "var(--yellow-color)" }}>
                      loading.....
                    </h3>
                  ) : (
                    <h3>Signup</h3>
                  )}
                  <FormGroup className="form-group">
                    <input
                      type="text"
                      placeholder="Username"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <input
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <input
                      type="file"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </FormGroup>
                  <button className="form-btn" disabled={loading}>
                    {loading ? "Creating account..." : "Create an account"}
                  </button>
                  <p>
                    Already have an account?{" "}
                    <Link to="/cump-shop/Login">Login</Link>
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

export default Signup;