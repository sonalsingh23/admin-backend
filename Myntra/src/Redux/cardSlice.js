import { createSlice } from "@reduxjs/toolkit";

// Image URLs 
const IMAGES_DATA = [
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2024/AUGUST/31/kMQyWgIr_fd14057a74b1485b9140505b7e023c3c.jpg",
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/25557730/2024/2/2/89a471ce-0c68-4cb2-b26d-46d725fd65131706850009893-Libas-Embroidered-Sequinned-Ready-to-Wear-Lehenga--Choli-910-13.jpg",
  // Add more URLs 
];

const cardSlice = createSlice({
  name: "Cards",
  initialState: {
    CardList: [],
  },
  reducers: {
    generateCards: (state) => {
      const cards = [];
      for (let i = 1; i <= 50; i++) {
        cards.push({
          id: `PR${i}`,
          price: (Math.random() * (200 - 100) + 100).toFixed(2), // Random price between 100 and 200
          image: IMAGES_DATA[Math.floor(Math.random() * IMAGES_DATA.length)], // Random image
        });
      }
      state.CardList = cards;
    },
  },
});

export const { generateCards } = cardSlice.actions;
export default cardSlice.reducer;


