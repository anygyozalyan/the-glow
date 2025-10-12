import React from "react";
import styles from "./CatalogProductDetails.module.css";

function NotFoundState({ navigate }) {
    return (
        <div className={styles.catalog__noProducts}>
            <p className={styles.catalog__noProductsMessage}>Product not found</p>
            <button
                className={styles.catalog__noProductsButton}
                onClick={() => navigate("/catalog")}
            >
                Back to catalog
            </button>
        </div>
    );
}

export default NotFoundState;