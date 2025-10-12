import React from 'react'
import { Link } from 'react-router-dom';
import styles from './AboutUs.module.css';

function AboutCTA() {
    return (
        <section className={styles['about-cta']}>
            <div className={styles['about-cta__container']}>
                <div className={styles['about-cta__content']}>
                    <h2 className={styles['about-cta__title']}>Join Our Journey</h2>
                    <p className={styles['about-cta__text']}>
                        Discover our products and become part of our story.
                        Together, we can make beauty better.
                    </p>
                    <Link to='/catalog' className={styles['about-cta__button']}>
                        Explore Our Products
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default AboutCTA
