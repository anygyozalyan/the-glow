import React, { useMemo } from "react";
import { catalogProducts } from "../../data/catalogProducts";
import ProductCard from "../Catalog/CatalogProductCard";
import styles from "./YouMightAlsoLike.module.css";

function YouMightAlsoLike({ currentProduct, onProductClick }) {
    const similarProducts = useMemo(() => {
        if (!currentProduct?.category) return [];

        return catalogProducts
            .filter(
                (p) =>
                    p.category === currentProduct.category &&
                    p.id !== currentProduct.id
            )
            .slice(0, 8);
    }, [currentProduct]);

    if (similarProducts.length === 0) {
        return null;
    }

    return (
        <section
            className={styles.youMightAlsoLike}
            aria-label="You might also like"
        >
            <h2 className={styles.youMightAlsoLikeTitle}>You might also like</h2>
            <div className={styles.youMightAlsoLikeWrapper}>
                {similarProducts.map((product) => (
                    <div
                        key={product.id}
                        className={styles.youMightAlsoLikeItem}
                        onClick={() => onProductClick(product.id)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                onProductClick(product.id);
                            }
                        }}
                        aria-label={`View ${product.name} details`}
                    >
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default YouMightAlsoLike;