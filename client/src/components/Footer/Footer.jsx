import React from 'react';
import styles from './Footer.module.css';
import FooterLeft from './FooterLeft';
import FooterRight from './FooterRight';

function Footer() {
    return (
        <footer className={styles.footer} aria-label="Website footer">
            <div className={styles.footer__content}>
                <FooterLeft />
                <FooterRight />
            </div>
        </footer>
    );
}

export default Footer;
