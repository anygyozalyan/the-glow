import React from 'react';
import styles from './CheckoutPage.module.css';

function ShippingAddress({ selectedCountry, setSelectedCountry }) {
    return (
        <section className={styles.checkoutSection}>
            <h2 className={styles.checkoutSection__title}>Shipping Address</h2>
            <div className={styles.checkoutSection__content}>
                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label htmlFor="firstName" className={styles.formGroup__label}>First Name</label>
                        <input type="text" id="firstName" className={styles.formGroup__input} placeholder="First name" required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="lastName" className={styles.formGroup__label}>Last Name</label>
                        <input type="text" id="lastName" className={styles.formGroup__input} placeholder="Last name" required />
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="address" className={styles.formGroup__label}>Street Address</label>
                    <input type="text" id="address" className={styles.formGroup__input} placeholder="123 Main Street" required />
                </div>

                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label htmlFor="city" className={styles.formGroup__label}>City</label>
                        <input type="text" id="city" className={styles.formGroup__input} placeholder="City" required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="postalCode" className={styles.formGroup__label}>Postal Code</label>
                        <input type="text" id="postalCode" className={styles.formGroup__input} placeholder="Postal code" required />
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="country" className={styles.formGroup__label}>
                        Country
                    </label>
                    <select
                        id="country"
                        className={styles.formGroup__select}
                        value={selectedCountry}
                        onChange={(e) => setSelectedCountry(e.target.value)}
                        required
                    >
                        <option value="">Select country</option>
                        <option value="am">Armenia (Free)</option>
                        <option value="ca">Canada </option>
                        <option value="uk">United Kingdom </option>
                        <option value="us">United States</option>
                    </select>
                </div>
            </div>
        </section>
    );
}

export default ShippingAddress;