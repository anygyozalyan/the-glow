import React from 'react';
import styles from './CheckoutPage.module.css';

function PaymentMethod({ paymentMethod, setPaymentMethod }) {
    return (
        <section className={styles.checkoutSection}>
            <h2 className={styles.checkoutSection__title}>Payment Method</h2>
            <div className={styles.checkoutSection__content}>
                <div className={styles.paymentMethods}>
                    <label className={styles.paymentMethod}>
                        <input type="radio" name="payment" value="credit-card" checked={paymentMethod === 'credit-card'} onChange={(e) => setPaymentMethod(e.target.value)} className={styles.paymentMethod__input} />
                        <div className={styles.paymentMethod__content}>
                            <span className={styles.paymentMethod__title}>Credit Card</span>
                            <span className={styles.paymentMethod__description}>Pay with Visa, Mastercard, or American Express</span>
                        </div>
                    </label>

                    <label className={styles.paymentMethod}>
                        <input type="radio" name="payment" value="paypal" checked={paymentMethod === 'paypal'} onChange={(e) => setPaymentMethod(e.target.value)} className={styles.paymentMethod__input} />
                        <div className={styles.paymentMethod__content}>
                            <span className={styles.paymentMethod__title}>PayPal</span>
                            <span className={styles.paymentMethod__description}>Pay with your PayPal account</span>
                        </div>
                    </label>

                    <label className={styles.paymentMethod}>
                        <input type="radio" name="payment" value="cod" checked={paymentMethod === 'cod'} onChange={(e) => setPaymentMethod(e.target.value)} className={styles.paymentMethod__input} />
                        <div className={styles.paymentMethod__content}>
                            <span className={styles.paymentMethod__title}>Cash on Delivery</span>
                            <span className={styles.paymentMethod__description}>Pay when you receive your order</span>
                        </div>
                    </label>
                </div>
            </div>
        </section>
    );
}

export default PaymentMethod;