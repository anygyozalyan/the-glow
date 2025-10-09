import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MobileMenuBurger.module.css';

function MobileBurgerMenu({ isOpen, onClose }) {
    return (
        <div className={`${styles.mobileMenu__overlay} ${isOpen ? styles.active : ''}`}>
            <div className={styles.mobileMenu__content}>
                <button className={styles.mobileMenu__closeButton} onClick={onClose}>
                    Close
                </button>

                <ul className={styles.mobileMenu__list}>
                    <li><Link to="/catalog" onClick={onClose}>Catalog</Link></li>
                    <li><Link to="/about" onClick={onClose}>About us</Link></li>
                    <li><Link to="/reviews" onClick={onClose}>Reviews</Link></li>
                    <li><Link to="/contact" onClick={onClose}>Contact us</Link></li>
                </ul>
            </div>
        </div >
    );
}

export default MobileBurgerMenu;