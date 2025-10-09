import React from "react";
import { Link } from "react-router-dom";
import styles from "./CartPage.module.css";

function CartSummary({ total }) {
    return (
        <div className={styles.cartSummary}>
            <h2 className={styles.cartSummary__title}>Order Summary</h2>

            <div className={styles.cartSummary__row}>
                <span className={styles.cartSummary__label}>Subtotal</span>
                <span className={styles.cartSummary__value}>${total.toFixed(2)}</span>
            </div>

            <div className={styles.cartSummary__divider}></div>

            <div className={`${styles.cartSummary__row} ${styles.cartSummary__rowTotal}`}>
                <span className={styles.cartSummary__label}>Total</span>
                <span className={styles.cartSummary__value}>${total.toFixed(2)}</span>
            </div>

            <Link
                to="/checkout"
                className={styles.cartSummary__checkoutButton}
                aria-label="Continue to secure checkout"
            >
                Continue to Checkout
            </Link>

            <Link
                to="/catalog"
                className={styles.cartSummary__continueShopping}
                aria-label="Continue shopping"
            >
                Continue Shopping
            </Link>
        </div>
    );
}

export default CartSummary;