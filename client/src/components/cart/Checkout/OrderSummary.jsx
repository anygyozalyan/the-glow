import React from 'react';
import styles from './CheckoutPage.module.css';
import { FaLock } from "react-icons/fa";

function OrderSummary({ items, totalPrice, shippingPrice, taxPrice, selectedCountry }) {

    const getShippingInfo = () => {
        if (!selectedCountry) return "0";

        if (selectedCountry === 'am') return 'Free';

        return `$${shippingPrice.toFixed(2)}`;
    };

    return (
        <div className={styles.orderSummary}>
            <h2 className={styles.orderSummary__title}>Order Summary</h2>

            <div className={styles.orderSummary__items}>
                {items.map((item) => (
                    <div key={item.id} className={styles.orderItem}>
                        <div className={styles.orderItem__imageContainer}>
                            <img src={item.img} alt={item.name} className={styles.orderItem__image} />
                        </div>
                        <div className={styles.orderItem__details}>
                            <h4 className={styles.orderItem__name}>{item.name}</h4>
                            <span className={styles.orderItem__quantity}>Qty: {item.quantity}</span>
                            <p className={styles.orderItem__price}>${item.price.toFixed(2)}</p>
                        </div>
                        <div className={styles.orderItem__subtotal}>${(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                ))}
            </div>

            <div className={styles.orderSummary__divider}></div>

            <div className={styles.orderSummary__totals}>
                <div className={styles.orderSummary__row}>
                    <span className={styles.orderSummary__label}>Subtotal</span>
                    <span className={styles.orderSummary__value}>${totalPrice.toFixed(2)}</span>
                </div>
                <div className={styles.orderSummary__row}>
                    <span className={styles.orderSummary__label}>Shipping</span>
                    <span className={styles.orderSummary__value}>
                        {getShippingInfo()}
                    </span>
                </div>
                <div className={styles.orderSummary__row}>
                    <span className={styles.orderSummary__label}>Tax</span>
                    <span className={styles.orderSummary__value}>${taxPrice.toFixed(2)}</span>
                </div>
                <div className={styles.orderSummary__divider}></div>
                <div className={`${styles.orderSummary__row} ${styles.orderSummary__rowTotal}`}>
                    <span className={styles.orderSummary__label}>Total</span>
                    <span className={styles.orderSummary__value}>
                        ${(totalPrice + shippingPrice + taxPrice).toFixed(2)}
                    </span>
                </div>
            </div>

            <button type="submit" className={styles.orderSummary__submitButton}>
                Place Order
            </button>

            <p className={styles.orderSummary__securityNote}>
                <FaLock /> Your payment information is secure and encrypted
            </p>
        </div>
    );
}

export default OrderSummary;