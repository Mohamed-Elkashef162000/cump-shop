import { Container, Row, Col } from "reactstrap";
import useAuth from "../custom-hooks/useAuth";
import "../style/admin-nav.css";
import { NavLink } from "react-router-dom";
const admin_nav = [
  {
    display: "Dashboard",
    path: "/cump-shop/dashboard",
  },
  {
    display: "AllProducts",
    path: "/cump-shop/dashboard/all-products",
  },
  {
    display: "AddProducts",
    path: "/cump-shop/dashboard/add-products",
  },
  {
    display: "Users",
    path: "/cump-shop/dashboard/users",
  },
];
const AdminNav = () => {
  const { currentUser } = useAuth();
  return (
    <>
      <header className="admin_nav">
        <div className="admin_nav-top">
          <Container>
            <div className="admin_nav-wrapper-top">
              <div className="logo">
                <h2>
                  <span>CUM</span> SHOP
                </h2>
              </div>
              <div className="search_box">
                <input type="text" placeholder="Search......" />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
              <div className="admin_nav-top-right">
                <span>
                  <i className="ri-notification-3-line"></i>
                </span>
                <span>
                  <i className="ri-settings-2-line"></i>
                </span>
                <img src={currentUser&& currentUser.photoURL} alt="" />
              </div>
            </div>
          </Container>
        </div>
      </header>

      <section className="admin_menu p-0">
        <Container>
          <Row>
            <div className="admin_navigation">
              <ul className="admin_menu-list">
                {admin_nav.map((ele, index) => (
                  <li className="admin_menu-item" key={index}>
                    <NavLink
                      className={(navClass) =>
                        navClass.isActive ? "active_admin-menu":""
                      }
                     
                      to={ele.path}
                    >
                      {ele.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AdminNav;
