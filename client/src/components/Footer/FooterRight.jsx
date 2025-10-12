import React from 'react'
import styles from './Footer.module.css';
import { Link } from 'react-router-dom'
import { HiMiniHeart } from "react-icons/hi2";
import logo from '../../assets/theGlow-navbar-logo.png'

function FooterRight() {
    return (
        <div className={styles.footer__right}>
            <nav className={styles.footer__nav}>
                <Link to="/catalog" className={styles.footer__navLink}>Catalog</Link>
                <Link to="/about-us" className={styles.footer__navLink}>About us</Link>
                <a
                    href="https://www.instagram.com/your_instagram_page"
                    className={styles.footer__navLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit our Instagram for reviews"
                >
                    Reviews
                </a>
                <a href="tel:+374XXXXXXXX" className={styles.footer__navLink}>
                    Contact us
                </a>
            </nav>

            <div className={styles.footer__brand}>
                <Link to="/"><img src={logo} alt="The Glow logo" className={styles.footer__logo} /></Link>
                <p className={styles.footer__credit}>With <HiMiniHeart className={styles.heart__icon} />by Any</p>
            </div>
        </div>
    );
}

export default FooterRight
