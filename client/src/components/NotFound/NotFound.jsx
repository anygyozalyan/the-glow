import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

function NotFound() {
    return (
        <div className={styles['notfound']}>
            <div className={styles['notfound__content']}>
                <h1 className={styles['notfound__title']}>404</h1>
                <p className={styles['notfound__subtitle']}>Oops! Page Not Found</p>
                <p className={styles['notfound__text']}>
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <Link to="/" className={styles['notfound__button']}>
                    Go Back Home
                </Link>
            </div>
        </div>
    );
}

export default NotFound;