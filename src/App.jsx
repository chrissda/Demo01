import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AllProductsView from "./Views/AllProductsView";
import HomeN from "./Views/HomeN";
import ProductViewN from "./Views/ProductViewN";
import Contact from "./Views/Contact";
import NavbarN from "./components/NavbarN";
import LoginN from "./Views/LoginN";
import RegisterN from "./Views/RegisterN";
import AdminView from "./Views/AdminView";

const App = () => {

  return (
      
      <Router>
        {/* <HomeN /> */}
        <NavbarN />
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<AllProductsView />} />
          <Route path="/home" element={<HomeN />} />
          <Route path="/product/:id" element={<ProductViewN />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginN />} />
          <Route path="/register" element={<RegisterN />} />
          <Route path="/admin" element={<AdminView />} />
        </Routes>
      </Router>
    );
};

export default App;

