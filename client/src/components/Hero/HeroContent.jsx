import React from 'react'
import styles from './Hero.module.css';
import HeroCTA from './HeroCTA';
import HeroFeatures from './HeroFeatures';

function HeroContent() {
    return (
        <div className={styles.hero__content}>
            <div className={styles.hero__contentWrapper}>
                <div className={styles.hero__brand}>Natural cosmetics</div>
                <h1 className={styles.hero__title}>
                    Cosmetics for the whole body
                    <span className={styles.hero__accent}> for every body</span>
                </h1>
                <p className={styles.hero__description}>
                    Elegant cosmetics for gentle care. A blend of natural ingredients and modern technology.
                </p>
                <HeroCTA />
                <HeroFeatures />
            </div>
        </div>
    );
}

export default HeroContent
