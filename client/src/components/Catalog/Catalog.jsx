import React, { useState, useMemo } from "react";
import styles from "./Catalog.module.css";
import ProductList from "./CatalogProductList.jsx";
import ImportantSection from "../shared/ImportantSection.jsx";
import { catalogProducts } from "../../data/catalogProducts.js";
import { useCatalogFilter } from "../../context/CatalogFilterContext.jsx";

const faqItems = [
    { question: "Why choose our products ?", answer: "We focus on quality, natural ingredients, and luxury feel." },
    { question: "How to order?", answer: "Browse the catalog, add items to your cart, and checkout securely." },
    { question: "How to return orders?", answer: "You can return within 14 days if unused and sealed." },
];

function Catalog() {
    const [visibleCount, setVisibleCount] = useState(8);
    const { selectedCategory, setSelectedCategory } = useCatalogFilter();

    const filteredProducts = useMemo(() => {
        if (selectedCategory === "all") return catalogProducts;
        return catalogProducts.filter(
            (product) =>
                product.category?.toLowerCase() === selectedCategory.toLowerCase()
        );
    }, [selectedCategory]);


    const handleShowMore = () => {
        setVisibleCount((prev) => prev + 8);
    };

    const resetFilters = () => {
        setSelectedCategory("all");
    };

    return (
        <section className={styles.catalog}>
            <div className={styles["catalog__top-container"]}>
                <p className={styles["catalog__top-text"]}> The brand’s goal is to give a feeling of luxury. We create body, hair, and face care products designed not only
                    to nourish and protect your skin, but also to bring everyday moments of self-care into the world of elegance and comfort.</p>
            </div>

            <ProductList
                products={filteredProducts.slice(0, visibleCount)}
                onShowMore={handleShowMore}
                canShowMore={visibleCount < filteredProducts.length}
                resetFilters={resetFilters}
            />

            <ImportantSection items={faqItems} />
        </section>
    );
}

export default Catalog;