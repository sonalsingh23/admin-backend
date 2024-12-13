import React from 'react';
import { useSelector } from 'react-redux';
import CardComponent from './CardComponent'; // Ensure this is correctly defined

function CardList() {
  const cardList = useSelector((state) => state.Cards.CardList);

  if (!cardList || cardList.length === 0) {
    return <p>No cards available. Please wait...</p>; 
  }

  return (
    <div>
      {cardList.map((card) => (
        <CardComponent key={card.id} id={card.id} price={card.price} />
      ))}
    </div>
  );
}

export default CardList;

