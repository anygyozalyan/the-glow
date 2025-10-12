import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { catalogProducts } from "../../data/catalogProducts";
import styles from "./CatalogProductDetails.module.css";
import YouMightAlsoLike from "../shared/YouMightAlsoLike";
import NotFoundState from "./NotFoundState";
import CatalogDetailsImages from "./CatalogDetailsImages";
import CatalogDetailsInfo from "./CatalogDetailsInfo";
import CatalogDetailsShipping from "./CatalogDetailsShipping";

function CatalogDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [product, setProduct] = useState(null);
    const [mainImage, setMainImage] = useState("");

    useEffect(() => {

        const foundProduct = catalogProducts.find(item => item.id.toString() === id);

        if (foundProduct) {
            setProduct(foundProduct);
            const initialImage = Array.isArray(foundProduct.img)
                ? foundProduct.img[0]
                : foundProduct.img;
            setMainImage(initialImage);
        } else {
            setProduct(null);
        }

        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [id]);

    const handleSimilarProductClick = (productId) => navigate(`/catalog/${productId}`);

    if (!product) return <NotFoundState navigate={navigate} />;

    const slideImages = product.slideImages || (Array.isArray(product.img) ? product.img : [product.img]);

    return (
        <section className={styles.catalogDetails}>
            <div className={styles.catalogDetails__container}>
                <CatalogDetailsImages
                    product={product}
                    mainImage={mainImage}
                    slideImages={slideImages}
                    setMainImage={setMainImage}
                />
                <CatalogDetailsInfo product={product} dispatch={dispatch} />
            </div>

            <CatalogDetailsShipping />

            <YouMightAlsoLike
                currentProduct={product}
                onProductClick={handleSimilarProductClick}
            />
        </section>
    );
}

export default CatalogDetails;