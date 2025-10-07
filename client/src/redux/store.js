import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import { loadCartState, saveCartState } from "./localStorage";

const preloadedState = loadCartState();

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    preloadedState,
});


store.subscribe(() => {
    const { cart } = store.getState();
    saveCartState(cart);
});

export default store;