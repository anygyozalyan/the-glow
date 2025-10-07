import React from 'react'
import styles from './HomeBestSeller.module.css'

function HomeBestSellerImage({ src, alt }) {
    return (
        <div className={styles['homeBestSeller__image-section']}>
            <img
                src={src}
                alt={alt}
                className={styles['homeBestSeller__product-image']}
            />
        </div>
    )
}

export default HomeBestSellerImage
