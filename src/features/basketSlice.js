import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      let copyOfBasket = state.items;
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        copyOfBasket = copyOfBasket.splice(index, 1);
        state.items = copyOfBasket;
      } else {
        alert("Wrong action");
      }
    },
  },
});

export const { addToBasket, removeItemFromBasket } = basketSlice.actions;
export const selectItems = (state) => state.basket.items;
export const selectItemCount = (state) => state.basket.item.length;

export default basketSlice.reducer;
