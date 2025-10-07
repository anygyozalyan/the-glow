import React from "react";
import { Outlet } from "react-router-dom";
import CatalogNavbar from "../Catalog/CatalogNavbar.jsx";
import Footer from "../Footer/Footer.jsx";
import CartSidebar from "../cart/CartSidebar.jsx";


export default function CatalogLayout() {
    return (
        <>
            <CatalogNavbar />
            <main>
                <Outlet />
            </main>
            <Footer />
            <CartSidebar />
        </>
    );
}