import React from "react";
import ProductCard from "./CatalogProductCard";
import styles from "./Catalog.module.css";

function ProductList({ products, onShowMore, canShowMore, resetFilters }) {

    if (products.length === 0) {
        return (
            <div className={styles.catalog__noProducts}>
                <p className={styles.catalog__noProductsMessage}>Products not found</p>
                <button
                    className={styles.catalog__noProductsButton}
                    onClick={resetFilters}
                >
                    See all products
                </button>
            </div>
        );
    }

    return (
        <>
            <div className={styles["catalog__products"]}>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {canShowMore && (
                <button onClick={onShowMore} className={styles["catalog__show-more-button"]}>
                    Show more
                </button>
            )}
        </>
    );
}

export default ProductList;