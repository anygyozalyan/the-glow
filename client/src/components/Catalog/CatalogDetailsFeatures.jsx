import React from 'react'
import { FiCheck } from "react-icons/fi";
import styles from "./CatalogProductDetails.module.css";

function CatalogDetailsFeatures() {
    const features = ["Natural ingredients", "Eco-friendly packaging", "Cruelty free"];

    return (
        <div className={styles.catalogDetails__features}>
            {features.map((f, idx) => (
                <div key={idx} className={styles.catalogDetails__feature}>
                    <FiCheck className={styles.catalogDetails__featureIcon} />
                    <span>{f}</span>
                </div>
            ))}
        </div>
    );
}

export default CatalogDetailsFeatures
