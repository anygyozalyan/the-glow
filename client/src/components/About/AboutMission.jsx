import React from 'react';
import styles from './AboutUs.module.css';

function Mission() {
    return (
        <section className={styles['about-mission']}>
            <div className={styles['about-mission__container']}>
                <div className={styles['about-mission__content']}>
                    <h2 className={styles['about-mission__title']}>Our Mission</h2>
                    <p className={styles['about-mission__text']}>
                        We believe that everyone deserves access to high-quality, sustainable products
                        that enhance daily life without compromising on ethics or the environment.
                        Our commitment extends beyond beauty—we're dedicated to creating positive
                        change in our community and the world.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Mission;