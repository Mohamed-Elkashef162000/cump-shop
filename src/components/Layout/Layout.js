import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
import { useLocation } from "react-router-dom";
import AdminNav from "../../admin/AdminNav";
import ProviderValue from "../../data-changed/ProviderValue";
const Layout = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname.startsWith("/cump-shop/dashboard") ? <AdminNav /> : <Header />}

      <div>
       <ProviderValue>
       <Routers />

       </ProviderValue>
       
      
      
      </div>

      <Footer />
    </>
  );
};

export default Layout;
