import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { useState } from "react";
import Swal from "sweetalert2";
import { db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
const style = {
  color: "orangered",
  marginBottom: "10px",
};
const AddProducts = () => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterShortDesc, setEnterShortDesc] = useState("");
  const [enterDescription, setEnterDescription] = useState("");
  const [enterCategory, setEnterCategory] = useState("");
  const [enterPrice, setEnterPrice] = useState("");
  const [enterRatings, setEnterRatings] = useState("");
  const [enterSale, setEnterSale] = useState("");
  const [enterProductImg, setEnterProductImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();
  const addProduct = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!navigator.onLine) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Erorr Network",
        confirmButtonColor: "#bb2424",
      });
      setLoading(false);
    } else {
      try {
        const storageRef = ref(
          storage,
          `productImages/${Date.now()}+${enterProductImg.name}`
        );
        const uploadTask = uploadBytesResumable(storageRef, enterProductImg);
        uploadTask.on(
          "state_changed",
          null,
          (error) => {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "Error uploading image",
              confirmButtonColor: "#bb2424",
            });
            setLoading(false);
          },
          async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            try {
              const docRef = collection(db, "products");
              await addDoc(docRef, {
                productName: enterTitle,
                shortDesc: enterShortDesc,
                description: enterDescription,
                category: enterCategory,
                FirstPrice: Number(enterPrice),
                imgURL: downloadURL,
                ratings:enterRatings,
                sale:enterSale,
              });

              Swal.fire({
                icon: "success",
                title: "Success",
                text: "Product added successfully",
                confirmButtonColor: "#28a745",
              });
              navigation("/dashboard/all-products");
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Error",
                text: "Error adding product",
                confirmButtonColor: "#bb2424",
              });
            } finally {
              setLoading(false);
            }
          }
        );
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Error initializing upload",
          confirmButtonColor: "#bb2424",
        });
        setLoading(false);
      }
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <h4 className="mb-4">Add Products</h4>
            <Form onSubmit={addProduct}>
              <FormGroup className="form_grup">
                <h4 style={style}>Product title</h4>
                <input
                  type="text"
                  placeholder="Double sofa"
                  value={enterTitle}
                  onChange={(e) => setEnterTitle(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup className="form_grup">
                <h4 style={style}>Short Description</h4>
                <input
                  type="text"
                  placeholder="lorem......"
                  value={enterShortDesc}
                  onChange={(e) => setEnterShortDesc(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup className="form_grup">
                <h4 style={style}>Description</h4>
                <input
                  type="text"
                  placeholder="Description......"
                  value={enterDescription}
                  onChange={(e) => setEnterDescription(e.target.value)}
                  required
                />
              </FormGroup>
              <div className="d-flex justify-content-between  gap-5">
                <FormGroup className="form_grup w-25">
                  <h4 style={style}>Price</h4>
                  <input
                    type="number"
                    placeholder="$100"
                    value={enterPrice}
                    onChange={(e) => setEnterPrice(e.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup className="form_grup w-25">
                  <h4 style={style}>Sale</h4>
                  <input
                    type="number"
                    placeholder="$100"
                    value={enterSale}
                    onChange={(e) => setEnterSale(e.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup className="form_grup w-25">
                  <h4 style={style}>Category</h4>
                  <select
                    className="w-100  p-2 mt-1 "
                    value={enterCategory}
                    onChange={(e) => setEnterCategory(e.target.value)}
                    required
                  >
                    <option> Select Category</option>
                    <option value="Desktop">Desktop</option>
                    <option value="Screen">Screen</option>
                    <option value="Mouse">Mouse</option>
                    <option value="Keyboard">Keyboard</option>
                    <option value="Motherboard">Motherboard</option>
                    <option value="GeForce">GeForce</option>
                    <option value="Power-Supply">Power-Supply</option>
                    <option value="Chair">Chair</option>
                    <option value="Hard">Hard</option>
                  </select>
                </FormGroup>

                <FormGroup className="form_grup w-25">
                  <h4 style={style}>Ratings</h4>
                  <select
                    className="w-100  p-2 mt-1 "
                    value={enterRatings}
                    onChange={(e) => setEnterRatings(e.target.value)}
                    required
                  >
                    <option> Select Ratingsy</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="4.5">4.5</option>
                    <option value="5">5</option>
                    <option value="7">7</option>
                  </select>
                </FormGroup>
              </div>
              <div>
                <FormGroup className="form_grup">
                  <h4 style={style}>Product Image</h4>
                  <input
                    type="file"
                    onChange={(e) => setEnterProductImg(e.target.files[0])}
                    required
                  />
                </FormGroup>
              </div>
              <button className="buy_btn" disabled={loading}>
                Add Product
              </button>
              {loading && <h1 className="mt-4 fs-2">Loading .....</h1>}
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AddProducts;
