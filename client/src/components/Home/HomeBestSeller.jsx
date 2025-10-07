import React from 'react'
import styles from './HomeBestSeller.module.css'
import HomeBackgroundText from './HomeBackgroundText'
import HomeBestSellerImage from './HomeBestSellerImage'
import HomeBestSellerInfo from './HomeBestSellerInfo'


function HomeBestSeller() {
    return (
        <section className={styles['homeBestSeller']}>
            <HomeBackgroundText />
            <div className={styles['homeBestSeller__container']}>
                <HomeBestSellerImage src="/images/3.png" alt="Best Seller Product" />
                <HomeBestSellerInfo />
            </div>
        </section>
    )
}

export default HomeBestSeller