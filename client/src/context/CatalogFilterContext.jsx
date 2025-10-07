import { createContext, useContext, useState } from "react";

const CatalogFilterContext = createContext();

export function CatalogFilterProvider({ children }) {
    const [selectedCategory, setSelectedCategory] = useState("all");

    const value = { selectedCategory, setSelectedCategory };

    return (
        <CatalogFilterContext.Provider value={value}>
            {children}
        </CatalogFilterContext.Provider>
    );
}

export function useCatalogFilter() {
    return useContext(CatalogFilterContext);
}