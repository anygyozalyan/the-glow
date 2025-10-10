import React from 'react'
import { HiArrowUp } from "react-icons/hi"
import styles from './HomeBestSeller.module.css'

function HomeBestSellerInfo({ name, price, onReadMore }) {
    return (
        <div className={styles['homeBestSeller__info-section']}>
            <div className={styles['homeBestSeller__best-seller-tag']}>
                <HiArrowUp className={styles['homeBestSeller__arrow-icon']} />
                <span>Our Best Seller</span>
            </div>

            <h1 className={styles['homeBestSeller__product-name']}>{name}</h1>

            <p className={styles['homeBestSeller__product-description']}>
                Experience ultimate hydration with our nourishing body butter.
                Enriched with natural ingredients for soft, glowing skin.
            </p>

            <div className={styles['homeBestSeller__price-container']}>
                <span className={styles['homeBestSeller__price']}>{price}$</span>
            </div>

            <div className={styles['homeBestSeller__actions']}>
                <button className={styles['homeBestSeller__add-to-cart-btn']} onClick={onReadMore}>
                    Read More
                </button>
            </div>

            <div className={styles['homeBestSeller__features']}>
                <div className={styles['homeBestSeller__feature']}>
                    <span>✓</span> Natural Ingredients
                </div>
                <div className={styles['homeBestSeller__feature']}>
                    <span>✓</span> Cruelty Free
                </div>
                <div className={styles['homeBestSeller__feature']}>
                    <span>✓</span> 24h Hydration
                </div>
            </div>
        </div>
    )
}

export default HomeBestSellerInfo
