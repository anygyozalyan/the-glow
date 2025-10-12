import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../Navbar/Navbar.module.css'
import logo from '../../assets/theGlow-navbar-logo.png'
import { HiOutlineMenu, HiOutlineShoppingBag } from 'react-icons/hi';
import MobileBurgerMenu from './MobileBurgerMenu';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(prev => !prev);
    const closeMenu = () => setMenuOpen(false);

    return (
        <nav>

            <a href="/" className={styles.logoLink}>
                <img src={logo} className={styles.logo} alt="logo" />
            </a>

            <div className={styles.navLinks}>

                <ul className={styles.list}>
                    <li><Link to="/catalog" className={styles.link}>Catalog</Link></li>
                    <li><Link to="/about-us" className={styles.link}>About us</Link></li>
                    <li>
                        <a
                            href="https://www.instagram.com/your_instagram_page"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                            aria-label="Visit our Instagram for reviews"
                        >
                            Reviews
                        </a>
                    </li>
                </ul>
                <a href="tel:+374XXXXXXXX" className={styles.contactUsLink}>
                    Contact us
                </a>

            </div>

            <div className={styles.mobileBlock}>

                <button className={styles.burgerMenu}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    onClick={toggleMenu}
                >
                    <HiOutlineMenu className={styles.icon} />
                </button>

            </div>

            <MobileBurgerMenu isOpen={menuOpen} onClose={closeMenu} />

        </nav>
    )
}

export default Navbar
