import React from 'react';
import { useSelector } from 'react-redux';
import { useOutletContext } from "react-router"; // To get context from Outlet
import Cards from './Cards';

const CardList = () => {
  const cardList = useSelector((state) => state.Cards.CardList);
 

 

  return (
    <div>
      {cardList && cardList.length > 0 ? (
        cardList.map((card) => (
          <Cards key={card.id} id={card.id} price={card.price} image={card.image} />
        ))
      ) : (
        <h4>No cards match your search.</h4>
      )}
    </div>
  );
};

export default CardList;
