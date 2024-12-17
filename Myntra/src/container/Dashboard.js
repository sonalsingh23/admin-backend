import React, { useEffect } from "react";
import Navbar from "../component/Navbar";
import Corosel from "../component/Corosel";
import Cards from '../component/Cards'
import { useSelector, useDispatch } from "react-redux";
import { generateCards } from "../Redux/cardSlice";
import { useOutletContext } from "react-router";

const Dashboard = () => {
  const dispatch = useDispatch();
  const cardList = useSelector((state) => state.Cards.CardList);
  const searchText = useOutletContext(); 
  console.log("searchText",searchText)
//  const filtrrst = cardList.filter((card) =>
//     card.name.toLowerCase().includes(searchText.toLowerCase()) // Assuming 'name' is a field in card object
//   );
  const filtercardlist =cardList.filter((card)=>card.id.toLowerCase().includes(searchText.toLowerCase()));
  useEffect(() => {
    if (cardList && cardList.length === 0) {
      console.log("Dispatching generateCards...");
      dispatch(generateCards());
    }
  }, []);

  console.log("CardList:", cardList);

  return (
    <div>
      {/* <Navbar /> */}
      <Corosel />
      <div className="container mt-4">
        <div className="row">
          {filtercardlist && filtercardlist.map((item) => (
            <div className="col-md-3 col-sm-6 col-12 mb-4" key={item.id}>
              <Cards
                id={item.id}
                price={item.price}
                image={item.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



export default Dashboard;
