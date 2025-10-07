import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import styles from './MainLayout.module.css';

function Layout() {
    return (
        <div className={styles.layout}>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;