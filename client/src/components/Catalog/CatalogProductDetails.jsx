import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { catalogProducts } from "../../data/catalogProducts";
import styles from "./Catalog.module.css";
import { HiOutlineShoppingBag } from "react-icons/hi";

function CatalogDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const product = catalogProducts.find(item => item.id.toString() === id);

    if (!product) {
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

    return (
        <section className={styles.catalogDetails}>
            <div className={styles.catalogDetails__container}>
                <div className={styles.catalogDetails__image}>
                    <img src={product.img} alt={product.name} />
                </div>

                <div className={styles.catalogDetails__info}>
                    <h1 className={styles.catalogDetails__name}>{product.name}</h1>
                    <p className={styles.catalogDetails__price}>{product.price}$</p>
                    {product.description && (
                        <p className={styles.catalogDetails__description}>{product.description}</p>
                    )}

                    <button
                        className={styles.catalogDetails__addToCart}
                        onClick={() => dispatch(addToCart(product))}
                    >
                        <HiOutlineShoppingBag /> Add to Cart
                    </button>
                </div>
            </div>
        </section>
    );
}

export default CatalogDetails;