import { Container ,Col ,Row } from "reactstrap";
import "../style/dashboard.css"
import useGetData from "../custom-hooks/useGetData";
import Products from "../data/Products";
const Dashboard = () => {
  const {data: products} = useGetData('products')
  const {data: users} = useGetData('users')
  return(
    <section>
      <Container>
        <Row>
          <Col lg='3'>
          <div className="revenue_box">
            <h2>Total Sales</h2>
            <h4>$ 7890</h4>
          </div>
          
          </Col>
          <Col lg='3'>
          <div className="order_box">
            <h2>Orders</h2>
            <h4>$ 7890</h4>
          </div></Col>
          <Col lg='3'>
          <div className="products_box">
            <h2>Total Products</h2>
          <div className="length">
          <h4>{Products.length}</h4>
          </div>
          </div>
          </Col>
          <Col lg='3'>
          <div className="users_box">
            <h2>Total Users</h2>
           <div className="length">
           <h4>{users.length}</h4>
           </div>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Dashboard;
