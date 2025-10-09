import React from 'react';
import styles from './CheckoutPage.module.css';

function ContactInformation() {
    return (
        <section className={styles.checkoutSection}>
            <h2 className={styles.checkoutSection__title}>Contact Information</h2>
            <div className={styles.checkoutSection__content}>
                <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.formGroup__label}>Email Address</label>
                    <input type="email" id="email" className={styles.formGroup__input} placeholder="your@email.com" required />
                </div>
            </div>
        </section>
    );
}

export default ContactInformation;