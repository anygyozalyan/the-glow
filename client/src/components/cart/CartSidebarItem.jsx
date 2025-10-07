import React from 'react'
import styles from "./CartSidebar.module.css";

function CartItem({ item, onRemove }) {

    return (
        <li className={styles["cart-sidebar__item"]}>
            <div className={styles["cart-sidebar__item-left"]}>
                <img
                    src={item.img}
                    alt={item.name}
                    className={styles["cart-sidebar__item-img"]}
                />
                <div className={styles["cart-sidebar__item-info"]}>
                    <span className={styles["cart-sidebar__item-name"]} title={item.name}>
                        {item.name}
                    </span>
                    <span className={styles["cart-sidebar__item-quantity"]}>
                        × {item.quantity}
                    </span>
                </div>
            </div>

            <div className={styles["cart-sidebar__item-right"]}>
                <span className={styles["cart-sidebar__item-price"]}>
                    {(item.price * item.quantity).toFixed(2)}$
                </span>
                <button
                    onClick={() => onRemove(item.id)}
                    className={styles["cart-sidebar__remove-btn"]}
                    aria-label={`Remove ${item.name} from cart`}
                >
                    remove
                </button>
            </div>
        </li>
    );
}

export default CartItem
