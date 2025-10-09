import React from 'react';
import { Link } from 'react-router-dom';
import { useBreadcrumbs } from '../../context/BreadcrumbsContext';
import styles from './Breadcrumbs.module.css';

const Breadcrumbs = () => {
    const breadcrumbs = useBreadcrumbs();

    if (!breadcrumbs || breadcrumbs.length <= 1) return null;

    return (
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <ul className={styles['breadcrumbs__list']}>
                {breadcrumbs.map((crumb, index) => {
                    const isLast = index === breadcrumbs.length - 1;
                    return (
                        <li
                            key={crumb.path}
                            className={styles['breadcrumbs__item']}
                            aria-current={isLast ? 'page' : undefined}
                        >
                            {!isLast ? (
                                <>
                                    <Link
                                        to={crumb.path}
                                        className={styles['breadcrumbs__link']}
                                    >
                                        {crumb.name}
                                    </Link>
                                    <span className={styles['breadcrumbs__separator']}>/</span>
                                </>
                            ) : (
                                <span className={styles['breadcrumbs__current']}>
                                    {crumb.name}
                                </span>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Breadcrumbs;