import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AllProductsView from "./Views/AllProductsView";
import HomeN from "./Views/HomeN";
import ProductViewN from "./Views/ProductViewN";
import Contact from "./Views/Contact";
import NavbarN from "./components/NavbarN";
import LoginN from "./Views/LoginN";
import RegisterN from "./Views/RegisterN";
import AdminView from "./Views/AdminView";
import { Navigate } from "react-router-dom";

// const PrivateRoute = ({ children }) => {
//   const token = localStorage.getItem("token")
//   if (!token) {
//     return <Navigate to="/login" replace />; // Redirige a login si no hay token
//   }

//   return children; // Si hay token, muestra la vista protegida
// };

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
          {/* <Route path="/admin" element={<PrivateRoute> <AdminView /> </PrivateRoute>} /> */}
          <Route path="/admin" element={<AdminView />} />
        </Routes>
      </Router>
    );
};

export default App;

