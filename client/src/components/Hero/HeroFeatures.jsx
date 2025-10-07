import React from 'react'
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import styles from './Hero.module.css';

function HeroFeatures() {
    return (
        <div className={styles.hero__features}>
            <div className={styles.hero__feature}>
                <span className={styles.hero__featureIcon}>
                    <IoShieldCheckmarkSharp aria-hidden="true" />
                </span>
                Natural ingredients
            </div>
            <div className={styles.hero__feature}>
                <span className={styles.hero__featureIcon}>
                    <IoShieldCheckmarkSharp aria-hidden="true" />
                </span>
                Proven effectiveness
            </div>
        </div>
    );
}

export default HeroFeatures
