import React, { useEffect } from 'react';
import Navbar from '../component/Navbar';
import Corosel from '../component/Corosel';
import CardComponent from '../component/Cards';
import { useSelector, useDispatch } from 'react-redux';
import { generateCards } from '../Redux/cardSlice';

const Dashboard = () => {
  const dispatch = useDispatch();
  const cardList = useSelector((state) => state.Cards.CardList);

  useEffect(() => {
    if (cardList.length === 0) {
      dispatch(generateCards());
    }
  }, [dispatch, cardList]);

  return (
    <div>
      <Navbar />
      <Corosel />
      <div className="container">
        <div className="row">
          {cardList.map((item) => (
            <div className="col-md-3 col-sm-6 col-12" key={item.id}>
              <CardComponent id={item.id} price={item.price} image={item.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
