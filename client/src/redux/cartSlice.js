import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    isSidebarOpen: false,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const existing = state.items.find(item => item.id === product.id);

            if (existing) {
                existing.quantity += 1;
            } else {
                state.items.push({ ...product, quantity: 1 });
            }

            state.isSidebarOpen = true;
        },

        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },

        increaseQuantity: (state, action) => {
            const item = state.items.find(i => i.id === action.payload);
            if (item) item.quantity += 1;
        },

        decreaseQuantity: (state, action) => {
            const item = state.items.find(i => i.id === action.payload);
            if (item && item.quantity > 1) item.quantity -= 1;
        },

        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        },

        closeSidebar: (state) => {
            state.isSidebarOpen = false;
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    toggleSidebar,
    closeSidebar,
} = cartSlice.actions;

export default cartSlice.reducer;