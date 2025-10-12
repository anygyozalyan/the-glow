import React from 'react'
import styles from "./CatalogProductDetails.module.css";

function CatalogDetailsDescription({ description }) {
    return (
        <div className={styles.catalogDetails__description}>
            <h3>Description</h3>
            <p>{description}</p>
        </div>
    );
}

export default CatalogDetailsDescription
