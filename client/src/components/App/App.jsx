import React from 'react';
import AppRoutes from '../../routes/AppRoutes';
import { CatalogFilterProvider } from '../../context/CatalogFilterContext';
import styles from './App.module.css'

function App() {
  return (
    <CatalogFilterProvider>
      <AppRoutes />
    </CatalogFilterProvider>
  );
}

export default App; 