import React from 'react'
import styles from './Footer.module.css';
import { Link } from 'react-router-dom'

function FooterLeft() {
    return (
        <div className={styles.footer__left}>
            <div className={styles.footer__linksGroup}>
                <Link to="/privacy" className={styles.footer__link}>Privacy Policy</Link>
                <Link to="/conditions" className={styles.footer__link}>Conditions</Link>
            </div>

            <div className={styles.footer__subscribe}>
                <label htmlFor="email" className={styles.footer__label}>Write your email to subscribe!</label>
                <div className={styles.footer__inputWrapper}>
                    <input id="email" type="email" className={styles.footer__input} placeholder="name@gmail.com" />
                    <button className={styles.footer__submit}>→</button>
                </div>
            </div>
        </div>
    );
}

export default FooterLeft
