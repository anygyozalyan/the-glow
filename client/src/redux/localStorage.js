export const CART_STORAGE_KEY = 'cart_key';

export const loadCartState = () => {
    try {
        const serialized = localStorage.getItem(CART_STORAGE_KEY);
        if (!serialized) return undefined;
        const parsed = JSON.parse(serialized);
        return { cart: parsed };
    } catch (error) {
        console.warn('Error loading cart from localStorage', error);
        return undefined;
    }
};

export const saveCartState = (cartState) => {
    try {
        const serialized = JSON.stringify(cartState);
        localStorage.setItem(CART_STORAGE_KEY, serialized);
    } catch (error) {
        console.warn('Error saving cart to localStorage', error);
    }
};