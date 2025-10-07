import React from "react";
import { Link } from "react-router-dom";
import styles from "./Catalog.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoIosArrowRoundForward } from "react-icons/io";

function ProductCard({ product }) {
    const dispatch = useDispatch();

    return (
        <div className={styles["catalog__product"]}>
            <div className={styles["catalog__product-top"]}>
                <HiOutlineShoppingBag className={styles["catalog__icon"]} onClick={() => dispatch(addToCart(product))} />
                <p className={styles["catalog__product-price"]}>{product.price}$</p>
            </div>

            <div className={styles["catalog__product-overlay"]}>
                <div className={styles["catalog__overlay-content"]}>
                    <Link to={`/catalog/${product.id}`}>
                        <div className={styles["catalog__overlay-cta"]}>
                            <span className={styles["catalog__discover"]}>Discover</span>
                            <IoIosArrowRoundForward className={styles["catalog__overlay-arrow"]} />
                        </div>
                    </Link>
                </div>
            </div>

            <img src={product.img} alt={product.name} className={styles["catalog__product-image"]} />
            <p className={styles["catalog__product-name"]}>{product.name}</p>

        </div>
    );
}

export default ProductCard;