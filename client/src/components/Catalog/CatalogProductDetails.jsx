import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { catalogProducts } from "../../data/catalogProducts";
import styles from "./CatalogProductDetails.module.css";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiTruck, FiCheck } from "react-icons/fi";

function CatalogDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const product = catalogProducts.find((item) => item.id.toString() === id);
    const [mainImage, setMainImage] = useState(
        product?.img ? (Array.isArray(product.img) ? product.img[0] : product.img) : ""
    );

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

    const slideImages = product.slideImages || (Array.isArray(product.img) ? product.img : [product.img]);

    return (
        <section className={styles.catalogDetails}>
            <div className={styles.catalogDetails__container}>
                {/* Images Section */}
                <div className={styles.catalogDetails__images}>
                    <div className={styles.catalogDetails__mainImage}>
                        <img src={mainImage} alt={product.name} />
                    </div>

                    {slideImages.length > 1 && (
                        <div className={styles.catalogDetails__thumbnails}>
                            {slideImages.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`${product.name} ${index}`}
                                    className={`${styles.catalogDetails__thumbnail} ${mainImage === img ? styles.catalogDetails__thumbnailActive : ""
                                        }`}
                                    onClick={() => setMainImage(img)}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Product Info Section */}
                <div className={styles.catalogDetails__info}>
                    <div className={styles.catalogDetails__header}>
                        <h1 className={styles.catalogDetails__name}>{product.name}</h1>
                        <p className={styles.catalogDetails__price}>${product.price}</p>
                    </div>

                    {/* Features */}
                    <div className={styles.catalogDetails__features}>
                        {["Natural ingredients", "Eco-friendly packaging", "Cruelty free"].map((f, idx) => (
                            <div key={idx} className={styles.catalogDetails__feature}>
                                <FiCheck className={styles.catalogDetails__featureIcon} />
                                <span>{f}</span>
                            </div>
                        ))}
                    </div>

                    {/* Description */}
                    {product.description && (
                        <div className={styles.catalogDetails__description}>
                            <h3>Description</h3>
                            <p>{product.description}</p>
                        </div>
                    )}

                    {/* Ingredients */}
                    {product.ingredients && (
                        <div className={styles.catalogDetails__ingredients}>
                            <h3>Key Ingredients</h3>
                            <div className={styles.catalogDetails__ingredientsList}>
                                {product.ingredients.map((ing, idx) => (
                                    <span key={idx} className={styles.catalogDetails__ingredient}>
                                        {ing}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Shipping Info */}
                    <div className={styles.catalogDetails__shipping}>
                        <div className={styles.catalogDetails__shippingHeader}>
                            <FiTruck className={styles.catalogDetails__shippingIcon} />
                            <span>Shipping & Delivery</span>
                        </div>
                        <div className={styles.catalogDetails__shippingOptions}>
                            {[
                                { method: "DHL Express", time: "2-3 business days" },
                                { method: "Standard Shipping", time: "5-7 business days" },
                            ].map((s, idx) => (
                                <div key={idx} className={styles.catalogDetails__shippingOption}>
                                    <span className={styles.catalogDetails__shippingMethod}>{s.method}</span>
                                    <span className={styles.catalogDetails__shippingTime}>{s.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Add to Cart */}
                    <button
                        className={styles.catalogDetails__addToCart}
                        onClick={() => dispatch(addToCart(product))}
                    >
                        <HiOutlineShoppingBag className={styles.catalogDetails__cartIcon} />
                        Add to Cart
                    </button>
                </div>
            </div>
        </section>
    );
}

export default CatalogDetails;