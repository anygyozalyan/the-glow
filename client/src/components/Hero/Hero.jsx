import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';
import HeroBackground from './HeroBackground'
import HeroContent from './HeroContent';

function Hero() {
    return (
        <section className={styles.hero} aria-label="Hero section">
            <HeroBackground />
            <HeroContent />
        </section>
    );
}

export default Hero;