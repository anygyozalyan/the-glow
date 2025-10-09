import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import styles from "./CartPage.module.css";

function CartPage() {
    const items = useSelector(state => state.cart.items);
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className={styles.cartPage}>
            <div className={styles.cartPage__container}>
                <header className={styles.cartPage__header}>
                    <h1 className={styles.cartPage__title}>Your Shopping Basket</h1>
                    <p className={styles.cartPage__itemCount}>
                        {items.length} {items.length === 1 ? 'item' : 'items'}
                    </p>
                </header>

                {items.length === 0 ? (
                    <div className={styles.cartPage__empty}>
                        <h2 className={styles.cartPage__emptyTitle}>Your basket is empty</h2>
                        <p className={styles.cartPage__emptyText}>
                            Discover our beautiful collection and treat yourself
                        </p>
                        <Link to="/catalog" className={styles.cartPage__emptyButton}>
                            Start Shopping
                        </Link>
                    </div>
                ) : (
                    <div className={styles.cartPage__content}>
                        <div className={styles.cartPage__items}>
                            {items.map(item => (
                                <CartItem key={item.id} item={item} />
                            ))}
                        </div>

                        <div className={styles.cartPage__summary}>
                            <CartSummary total={total} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CartPage;