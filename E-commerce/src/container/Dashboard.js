import React, { useEffect} from "react";
// import Card from "../component/Card1";
 import Home from "../component/Home";
// import ProductList from "../component/ProductList";
import { useSelector, useDispatch } from "react-redux";
import { generateProducts } from "../Redux/productSlice";
import Card1 from "../component/Card1";

const Dashboard = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.productList);
  console.log("products", products);

  //  const [initalproduct, setInitalproduct] = useState([]);
  // console.error("check", initalproduct)
  // console.log("check", initalproduct);
  useEffect(() => {
    if (products && products.length === 0)
      dispatch(generateProducts());
  }, []);
  // useEffect(() => {
  //   setInitalproduct(products);
  // }, [products]);

  return (
    <div>
      <Home />
      <div style={{ marginTop: "30px" }}>
      <div className="container">
      <div className="row">
            {products && products.map((item) => (
              <div className="col-3" key={item.id}>
                <Card1 id={item.id} price={item.price} image={item.image} />
              </div>
            ))}
          </div>
        </div>
        
    </div>
    </div>
  );
};

export default Dashboard;
