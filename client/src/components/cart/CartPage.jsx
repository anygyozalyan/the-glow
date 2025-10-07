import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../../redux/cartSlice";

function CartPage() {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.items);

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleDecrease = (item) => {
        if (item.quantity === 1) {
            dispatch(removeFromCart(item.id));
        } else {
            dispatch(decreaseQuantity(item.id));
        }
    };

    return (
        <div>
            <h1>Your Basket</h1>
            {items.length === 0 && <p>Cart is empty</p>}
            {items.map(item => (
                <div key={item.id}>
                    <img src={item.img} alt={item.name} />
                    <p>{item.name}</p>
                    <p>{item.price}$</p>
                    <div>
                        <button onClick={() => handleDecrease(item)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                    </div>
                </div>
            ))}
            <h2>Total: {total}$</h2>
            <Link to="/checkout">Continue to Checkout</Link>
        </div>
    );
}

export default CartPage;