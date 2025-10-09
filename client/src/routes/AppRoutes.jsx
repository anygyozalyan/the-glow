import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../components/Layout/MainLayout';
import CatalogLayout from '../components/Layout/CatalogLayout';
import loadingAnimation from '../assets/loading.json';
import Lottie from 'lottie-react';
// pages
const Home = lazy(() => import('../components/Home/Home'))
const Catalog = lazy(() => import('../components/Catalog/Catalog'));
const CartPage = lazy(() => import('../components/cart/CartPage'))
const CheckoutPage = lazy(() => import('../components/cart/Checkout/CheckoutPage'));
const CatalogProductDetails = lazy(() => import('../components/Catalog/CatalogProductDetails'))


function AppRoutes() {
    return (
        <Suspense fallback={
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Lottie animationData={loadingAnimation} loop={true} style={{ width: 200, height: 200 }} />
            </div>
        }>
            <Routes>

                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path='/cart' element={<CartPage />} />
                    <Route path='/checkout' element={<CheckoutPage />} />
                </Route>

                <Route path="/catalog" element={<CatalogLayout />}>
                    <Route index element={<Catalog />} />
                    <Route path="/catalog/:id" element={<CatalogProductDetails />} />
                </Route>


            </Routes>
        </Suspense>
    );
}

export default AppRoutes;
