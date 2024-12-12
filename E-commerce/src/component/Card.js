import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { GrFormSubtract } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../Redux/loginSlice";

import image1 from '../assests/CSS/61WUSYIQdKL._AC_UY327_FMwebp_QL65_.webp';
import image2 from '../assests/CSS/51BSZYdcy2L._AC_UY327_FMwebp_QL65_.webp';
import image3 from '../assests/CSS/61qV17Px4NL._AC_UY327_FMwebp_QL65_.webp';
import image4 from '../assests/CSS/51ZldSgxU6L._AC_UY327_FMwebp_QL65_.webp'




const cardData = [
  {
    id: 1,
    title: "Apple iPhone 14, 128GB, Midnight - Unlocked (Renewed)",
    price: 50,
    text: "$55.00",
    image: image1,
  },
  {
    id: 2,
    title: "Apple iPhone 14 Pro, 128GB, Gold for Verizon (Renewed)",
    price: 60,
    text: "$65.00",
    image: image2,
  },
  {
    id: 3,
    title: "Apple iPhone 16 Pro (512 GB) - Natural Titanium [Locked]",
    price: 50,
    text: "$75.00 ",
    image: image3,
  },
  {
    id: 4,
    title: "I16 ProMax Smartphone Unlocked Cell Phone, 6.99“ HD Screen 5G Phone",
    price: 40,
    text: "$50.00 ",
    image: image4,
  },
];

const Card = ({product}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cardCounts, setCardCounts] = useState(
    cardData.reduce((acc, card) => ({ ...acc, [card.id]: 0 }), {})
  );

  const addFunction = (id) => {
    debugger;
    setCardCounts((prevCounts) => ({
      ...prevCounts,
      [id]: prevCounts[id] + 1,
    }));
  };

  const subtractFunction = (id) => {
    setCardCounts((prevCounts) => ({
      ...prevCounts,
      [id]: Math.max(0, prevCounts[id] - 1),
    }));
  };

  const handleAddToCart = (item) => {
    dispatch(addCart(item));
    navigate("/addtocart"); // Navigate to AddtoCart page
  };

  return (
    <div style={{ display: "flex", gap: "1rem", justifyContent: "center", margin: "20px", marginTop: "30px" }}>
    
      {product.map((item) => (
        <div className="card" style={{ width: "18rem" }} key={item.id}>
          <img src={item.image} className="card-img-top" alt="helo" style={{ width: "100%", height: "200px", objectFit: "contain" }} />
          <div className="card-body">
            <h5 className="card-title">card</h5>
            <p className="card-text"><strong>Original Price:</strong>card</p>
            <p className="card-text"><strong>Total Price:</strong> ${item.price * cardCounts[item.id]}</p>
            <span className="card-count">Quantity: {cardCounts[item.id]}</span>
            <div>
              <button className="btn btn-secondary m-2" onClick={() => subtractFunction(item.id)} disabled={cardCounts[item.id] === 0}>
                <GrFormSubtract />
              </button>
              <button className="btn btn-secondary" onClick={() => handleAddToCart(item)}>
                Add to Cart
              </button>
              <button className="btn btn-secondary m-2" onClick={() => addFunction(item.id)}>
                <IoIosAdd />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;








