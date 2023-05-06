import Index from "../src/pages/index";
import Home from "./pages/home";
import { Cart } from "./pages/cart";
import { Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const { totalCount } = useSelector((state) => state.cart);
  return (
    <div className="container">
      <div className="d-flex py-4">
        <Link to="/" className="btn btn-info mx-2">
          Login
        </Link>
        <Link to="/home" className="btn btn-info mx-2">
          Home
        </Link>
        <Link to="/cart" className="btn btn-info mx-2">
          Cart
        </Link>
        <div className="ms-auto">
          <Link className="btn btn-primary position-relative" to="/cart">
            Cart
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {totalCount}
            </span>
          </Link>
        </div>
      </div>
      <h />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
