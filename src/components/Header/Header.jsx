import "./header.css";
import logo from "../../Imges/Logo-1.png";
import user from "../../Imges/user.png";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { Container, Row } from "reactstrap";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import useAuth from "../../custom-hooks/useAuth";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import Swal from "sweetalert2";
const Header = () => {
  const Quantity = useSelector((state) => state.cart.totalQuantity);
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser } = useAuth();
  let linkName = location.pathname === "/cump-shop/signup" ? "Signup" : "Login";
  console.log(currentUser)
  const stickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };
  const Logout = () => {
    Swal.fire({
      title: `Are you sure to Log out.`,
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonColor: "#bb2424",
    }).then((data) => {
      if (data.isConfirmed) {
        signOut(auth).then(() => {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "you have successfully logged out.",
            cancelButtonText: "",
          });
        });
        navigate("/cump-shop/login");
      } else {
        navigate("cump-shop/home");
      }
    });
  };
  useEffect(() => {
    stickyHeader();
    return () => window.removeEventListener("scroll", stickyHeader);
  }, []);

  const menuToggle = () => menuRef.current.classList.toggle("active_menu");
  const navigateCart = () => {
    navigate("cump-shop/purchases");
  };

  const nav_links = [
    {
      path: "cump-shop/home",
      display: "Home",
    },
    {
      path: "cump-shop/shop",
      display: "Shop",
    },
    {
      path: "cump-shop/purchases",
      display: "Purchases",
    },
    {
      path:
        location.pathname === "/cump-shop/signup"
          ? "/cump-shop/signup"
          : "/cump-shop/login",
      display: linkName,
    },
    {
      path: "/cump-shop/logout",
      display: "Logout",
    },
  ];

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav_wrapper">
            <div className="logo">
              <img src={logo} alt="Logo" />
              <div>
                <h1>
                  <span>CUM</span> SHOP
                </h1>
              </div>
            </div>
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {nav_links.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <NavLink
                      to={item.path}
                      onClick={
                        item.path === "/cump-shop/logout" && currentUser
                          ? Logout
                          : ""
                      }
                      className={(navClass) =>
                        navClass.isActive ? "nav_active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav_icons">
              <span className="fav_icon">
                <i className="ri-heart-line"></i>
                <span className="badge">1</span>
              </span>
              <span className="cart_icon" onClick={navigateCart}>
                <i className="ri-shopping-cart-line"></i>
                <span className="badge">{Quantity}</span>
              </span>
              <span>
                <motion.img
                  className="imguser"
                  whileTap={{ scale: 1.2 }}
                  src={currentUser ? currentUser.photoURL : user}
                  alt=""
                />
              </span>
              {currentUser && <h5 className="userName">{currentUser.displayName}</h5>}
              <div className="mobile_menu">
                <span onClick={menuToggle}>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
