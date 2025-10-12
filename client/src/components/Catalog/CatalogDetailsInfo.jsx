import React from 'react'
import styles from "./CatalogProductDetails.module.css";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { addToCart } from "../../redux/cartSlice";
import CatalogDetailsFeatures from "./CatalogDetailsFeatures";
import CatalogDetailsDescription from "./CatalogDetailsDescription";
import CatalogDetailsIngredients from "./CatalogDetailsIngredients";

function CatalogDetailsInfo({ product, dispatch }) {
    return (
        <div className={styles.catalogDetails__info}>
            <div className={styles.catalogDetails__header}>
                <h1 className={styles.catalogDetails__name}>{product.name}</h1>
                <p className={styles.catalogDetails__price}>${product.price}</p>
            </div>

            <CatalogDetailsFeatures />

            {product.description && <CatalogDetailsDescription description={product.description} />}

            {product.ingredients && <CatalogDetailsIngredients ingredients={product.ingredients} />}

            <button
                className={styles.catalogDetails__addToCart}
                onClick={() => dispatch(addToCart(product))}
            >
                <HiOutlineShoppingBag className={styles.catalogDetails__cartIcon} />
                Add to Cart
            </button>
        </div>
    );
}

export default CatalogDetailsInfo
