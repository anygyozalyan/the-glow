import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

function HeroCTA() {
    return (
        <div className={styles.hero__cta}>
            <Link to="/catalog" aria-label="Go to product collection">
                <button className={styles.hero__btnPrimary}>Collection</button>
            </Link>
            <a
                href="https://www.instagram.com/your_instagram_page"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram for reviews"
            >
                <button className={styles.hero__btnSecondary}>Reviews</button>
            </a>
        </div>
    );
}

export default HeroCTA
