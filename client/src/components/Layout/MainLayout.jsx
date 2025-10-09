import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import styles from './MainLayout.module.css';

function Layout() {
    return (
        <div className={styles.layout}>
            <Navbar />
            <Breadcrumbs />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;