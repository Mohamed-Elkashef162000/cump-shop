import { Container,Col ,Row } from "reactstrap"
import useGetData from "../custom-hooks/useGetData"
import {db} from"../firebase"
import {doc ,deleteDoc}from "firebase/firestore"
import Swal from "sweetalert2"
const AllProducts =()=> {
  const {data:productsData ,loading}=useGetData('products')
  const alert = (productName ,id) => {
    Swal.fire({
      title: `Are you sure delete ${productName}`,
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonColor: "#bb2424",
    }).then(async(data) => {
      if (data.isConfirmed) {
        await deleteDoc(doc(db,'products',id))
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "delete successfully",
          confirmButtonColor: "#28a745",
        });
      }
    });
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg='12'>
           {loading ? <h2 className="fs-1 text-center">Loading..... </h2> :  <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Sale</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {productsData.map((ele)=>(
                  <tr key={ele.id}>
                  <td><img src={ele.imgURL} alt="" /></td>
                  <td>{ele.productName}</td>
                  <td>{ele.category}</td>
                  <td>{ele.FirstPrice}</td>
                  <td>{ele.sale}</td>
                  <td><button onClick={()=>alert(ele.productName,ele.id)} className="btn btn-danger">Delete</button></td>
                </tr>
                ))}
              </tbody>
            </table>}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AllProducts
