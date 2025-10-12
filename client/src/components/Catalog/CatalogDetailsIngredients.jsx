import React from 'react'
import styles from "./CatalogProductDetails.module.css";

function CatalogDetailsIngredients({ ingredients }) {
    return (
        <div className={styles.catalogDetails__ingredients}>
            <h3>Key Ingredients</h3>
            <div className={styles.catalogDetails__ingredientsList}>
                {ingredients.map((ing, idx) => (
                    <span key={idx} className={styles.catalogDetails__ingredient}>
                        {ing}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default CatalogDetailsIngredients
