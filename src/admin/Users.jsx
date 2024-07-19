import { Container, Col, Row } from "reactstrap";
import useGetData from "../custom-hooks/useGetData";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
import Swal from "sweetalert2";
const Users = () => {
  const { data: usersData, loading } = useGetData("users");
  const alert = (userName, id) => {
    Swal.fire({
      title: `Are you sure delete ${userName}`,
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonColor: "#bb2424",
    }).then(async (data) => {
      if (data.isConfirmed) {
        await deleteDoc(doc(db, "users", id));
      }
    });
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <h4 className="fw-bold">Users</h4>
          </Col>
          <Col lg="12">
            {loading ? (
              <h2 className="text-center fs-1">Loading.....</h2>
            ) : (
              <table className="table">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>userName</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {usersData.map((user) => (
                    <tr key={user.vid}>
                      <td>
                        <img src={user.photoURL} alt="" />
                      </td>
                      <td>{user.displayName}</td>
                      <td>{user.email}</td>
                      <td>
                        <button
                          onClick={() => alert(user.displayName, user.id)}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Users;
