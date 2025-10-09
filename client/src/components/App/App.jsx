import React from 'react';
import AppRoutes from '../../routes/AppRoutes';
import { CatalogFilterProvider } from '../../context/CatalogFilterContext';
import { BreadcrumbsProvider } from '../../context/BreadcrumbsContext';
import styles from './App.module.css'

function App() {
  return (
    <CatalogFilterProvider>
      <BreadcrumbsProvider>
        <AppRoutes />
      </BreadcrumbsProvider>
    </CatalogFilterProvider>
  );
}

export default App; 