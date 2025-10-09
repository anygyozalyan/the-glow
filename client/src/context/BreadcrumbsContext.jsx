import React, { createContext, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { catalogProducts } from '../data/catalogProducts';

const routeNameMap = {
    '/': 'Home',
    '/catalog': 'Catalog',
    '/cart': 'Cart',
    '/checkout': 'Checkout',
    '/about': 'About Us',
};

const BreadcrumbsContext = createContext([]);

export const useBreadcrumbs = () => useContext(BreadcrumbsContext);

export const BreadcrumbsProvider = ({ children }) => {
    const location = useLocation();
    const breadcrumbs = [];


    if (location.pathname === '/') { }

    else if (location.pathname.startsWith('/catalog/')) {
        const pathSegments = location.pathname.split('/').filter(Boolean);
        const productId = Number(pathSegments[1]);

        breadcrumbs.push({ name: 'Home', path: '/' });
        breadcrumbs.push({ name: 'Catalog', path: '/catalog' });

        const product = catalogProducts.find(p => p.id === productId);
        breadcrumbs.push({
            name: product ? product.name : `Product ${productId}`,
            path: location.pathname
        });
    }

    else {
        breadcrumbs.push({ name: 'Home', path: '/' });
        if (routeNameMap[location.pathname]) {
            breadcrumbs.push({
                name: routeNameMap[location.pathname],
                path: location.pathname
            });
        }
    }

    return (
        <BreadcrumbsContext.Provider value={breadcrumbs}>
            {children}
        </BreadcrumbsContext.Provider>
    );
};