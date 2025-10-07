import { describe, it, expect } from 'vitest'
import cartReducer, {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    toggleSidebar,
    closeSidebar
} from './cartSlice'

describe('cartSlice', () => {
    const initialState = { items: [], isSidebarOpen: false }
    const product = { id: 1, name: 'scrub', price: 60 }

    it('should handle addToCart for new product', () => {
        const state = cartReducer(initialState, addToCart(product))
        expect(state.items.length).toBe(1)
        expect(state.items[0].quantity).toBe(1)
        expect(state.isSidebarOpen).toBe(true)
    })

    it('should increase quantity if product already in cart', () => {
        const stateWithProduct = { items: [{ ...product, quantity: 1 }], isSidebarOpen: true }
        const state = cartReducer(stateWithProduct, addToCart(product))
        expect(state.items[0].quantity).toBe(2)
    })

    it('should remove product from cart', () => {
        const stateWithProduct = { items: [{ ...product, quantity: 1 }], isSidebarOpen: true }
        const state = cartReducer(stateWithProduct, removeFromCart(1))
        expect(state.items.length).toBe(0)
    })

    it('should increase and decrease quantity', () => {
        const stateWithProduct = { items: [{ ...product, quantity: 2 }], isSidebarOpen: true }
        let state = cartReducer(stateWithProduct, increaseQuantity(1))
        expect(state.items[0].quantity).toBe(3)

        state = cartReducer(state, decreaseQuantity(1))
        expect(state.items[0].quantity).toBe(2)
    })

    it('should toggle and close sidebar', () => {
        let state = cartReducer(initialState, toggleSidebar())
        expect(state.isSidebarOpen).toBe(true)
        state = cartReducer(state, closeSidebar())
        expect(state.isSidebarOpen).toBe(false)
    })
})