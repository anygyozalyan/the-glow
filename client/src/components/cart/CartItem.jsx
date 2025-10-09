import React from "react";
import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../../redux/cartSlice";
import styles from "./CartPage.module.css";

function CartItem({ item }) {
    const dispatch = useDispatch();

    const handleDecrease = () => {
        if (item.quantity === 1) {
            dispatch(removeFromCart(item.id));
        } else {
            dispatch(decreaseQuantity(item.id));
        }
    };

    return (
        <div className={styles.cartItem}>
            <div className={styles.cartItem__imageContainer}>
                <img src={item.img} alt={item.name} className={styles.cartItem__image} />
            </div>

            <div className={styles.cartItem__details}>
                <h3 className={styles.cartItem__name}>{item.name}</h3>
                <p className={styles.cartItem__price}>${item.price}</p>

                <div className={styles.cartItem__quantity}>
                    <button
                        className={`${styles.cartItem__quantityButton} ${styles.cartItem__quantityButtonDecrease}`}
                        onClick={handleDecrease}
                        aria-label={`Decrease quantity of ${item.name}`}
                    >
                        −
                    </button>
                    <span
                        className={styles.cartItem__quantityDisplay}
                        aria-label={`Current quantity: ${item.quantity}`}
                    >
                        {item.quantity}
                    </span>
                    <button
                        className={`${styles.cartItem__quantityButton} ${styles.cartItem__quantityButtonIncrease}`}
                        onClick={() => dispatch(increaseQuantity(item.id))}
                        aria-label={`Increase quantity of ${item.name}`}
                    >
                        +
                    </button>
                </div>
            </div>

            <div className={styles.cartItem__actions}>
                <button
                    className={styles.cartItem__remove}
                    onClick={() => dispatch(removeFromCart(item.id))}
                    aria-label={`Remove ${item.name} from basket`}
                >
                    Remove
                </button>
                <p className={styles.cartItem__subtotal}>
                    ${(item.price * item.quantity).toFixed(2)}
                </p>
            </div>
        </div>
    );
}

export default CartItem;