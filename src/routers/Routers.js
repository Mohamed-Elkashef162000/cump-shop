import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Signup from "../pages/Signup";
import Purchases from "../pages/Purchases";
import Login from "../pages/Login";
import ProductInfo from "../pages/ProductInfo";
import ProtectedRoute from "./ProtectedRoute";
import InputValue from "../data-changed/InputValue";
import AddProducts from "../admin/AddProducts";
import AllProducts from "../admin/AllProducts";
import Dashboard from "../admin/Dashboard";
import Users from "../admin/Users";
import PageNotFound from "../pages/PageNotFound";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"cump-shop/home"} />} />
      <Route path="cump-shop/home" element={<Home />} />
      <Route path="cump-shop/shop" element={<Shop />} />
      <Route path="cump-shop/shop/:id" element={<ProductInfo />} />
      <Route path="cump-shop/signup" element={<Signup />} />
      <Route path="cump-shop/login" element={<Login />} />
  
      <Route path="*" element={<PageNotFound />} />
      <Route path="/" element={<ProtectedRoute />}>
      <Route path="/cump-shop/logout" element={<Login />} />
        <Route path="/cump-shop/purchases" element={<Purchases />} />
        <Route path="/cump-shop/dashboard" element={<Dashboard />} />
        <Route path="/cump-shop/dashboard/all-products" element={<AllProducts />} />
        <Route path="/cump-shop/dashboard/add-products" element={<AddProducts />} />
        <Route path="/cump-shop/dashboard/users" element={<Users />} />
       
        <Route path="/cump-shop/dc"element={<InputValue/>}/>
      </Route>
    </Routes>
  );
};

export default Routers;
