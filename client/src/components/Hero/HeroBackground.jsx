import React from 'react';
import styles from './Hero.module.css';

function HeroBackground() {
    return (
        <div className={styles.hero__background}>
            <video
                className={styles.hero__video}
                autoPlay
                muted
                loop
                playsInline
                poster="/video/video.mp4"
                aria-hidden="true"
            >
                <source src="/video/video.mp4" type="video/mp4" />

            </video>
            <div className={styles.hero__overlay}></div>
        </div>
    );
}

export default HeroBackground;