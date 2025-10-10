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
                    <li><Link to="" className={styles.link}>About us</Link></li>
                    <li><Link to="" className={styles.link}>Reviews</Link></li>
                </ul>

                <a href="" className={styles.contactUsLink}>Contact us</a>

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
