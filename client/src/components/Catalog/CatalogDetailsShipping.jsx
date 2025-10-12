import React from 'react'
import { FiTruck } from "react-icons/fi";
import styles from "./CatalogProductDetails.module.css";

function CatalogDetailsShipping() {
    const shippingOptions = [
        { method: "DHL Express", time: "2-3 business days" },
        { method: "Standard Shipping", time: "5-7 business days" },
    ];

    return (
        <div className={styles.catalogDetails__shipping}>
            <div className={styles.catalogDetails__shippingHeader}>
                <FiTruck className={styles.catalogDetails__shippingIcon} />
                <span>Shipping & Delivery</span>
            </div>
            <div className={styles.catalogDetails__shippingOptions}>
                {shippingOptions.map((s, idx) => (
                    <div key={idx} className={styles.catalogDetails__shippingOption}>
                        <span className={styles.catalogDetails__shippingMethod}>{s.method}</span>
                        <span className={styles.catalogDetails__shippingTime}>{s.time}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CatalogDetailsShipping
