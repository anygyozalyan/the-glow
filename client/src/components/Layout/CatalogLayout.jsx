import React from "react";
import { Outlet } from "react-router-dom";
import CatalogNavbar from "../Catalog/CatalogNavbar.jsx";
import Footer from "../Footer/Footer.jsx";
import CartSidebar from "../cart/CartSidebar.jsx";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs.jsx";
import styles from "./CatalogLayout.module.css";

export default function CatalogLayout() {
    return (
        <>
            <main className={styles.container}>
                <CatalogNavbar />
                <Breadcrumbs />
                <Outlet />
            </main>
            <Footer />
            <CartSidebar />
        </>
    );
}