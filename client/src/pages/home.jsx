import { useDispatch, useSelector } from "react-redux";
import { unsetUser } from "../reducers/users/userSlice";
import { useNavigate } from "react-router-dom";
import { ProductsList } from "../components/ProductsList";
import { useState, useEffect } from "react";
import Axios from "axios";

const Home = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3000/products").then((response) => {
      setProducts(response.data);
    });
  }, []);
  const handleLogout = () => {
    dispatch(unsetUser());
    navigate("/");
  };
  return (
    <div>
      <h2>HOME</h2>
      <p>
        Welcome Mr {user.fullname}/ {user.email}
      </p>
      <button className="btn btn-primary" onClick={handleLogout}>
        Log Out
      </button>
      <hr />
      <ProductsList products={products } />
    </div>
  );
};

export default Home;
