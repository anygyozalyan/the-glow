import React from 'react'
import styles from "./CatalogProductDetails.module.css";

function CatalogDetailsImages({ product, mainImage, slideImages, setMainImage }) {
    return (
        <div className={styles.catalogDetails__images}>
            <div className={styles.catalogDetails__mainImage}>
                <img src={mainImage} alt={product.name} loading="eager" />
            </div>
            {slideImages.length > 1 && (
                <div className={styles.catalogDetails__thumbnails}>
                    {slideImages.map((img, idx) => (
                        <img
                            key={`${product.id}-${idx}`}
                            src={img}
                            alt={`${product.name} view ${idx + 1}`}
                            className={`${styles.catalogDetails__thumbnail} ${mainImage === img ? styles.catalogDetails__thumbnailActive : ""
                                }`}
                            onClick={() => setMainImage(img)}
                            loading="lazy"
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default CatalogDetailsImages
