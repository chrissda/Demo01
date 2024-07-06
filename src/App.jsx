import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AllProductsView from "./Views/AllProductsView";
//import Navbar from "./components/Navbar";
//import NavbarN from "./components/NavbarN";
import HomeN from "./Views/HomeN";
//import CarouselN from "./components/CarouselN";
import ProductViewN from "./Views/ProductViewN";
import Contact from "./Views/Contact";
import NavbarN from "./components/NavbarN";



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
          
        </Routes>
      </Router>
      
    );
};

export default App;

