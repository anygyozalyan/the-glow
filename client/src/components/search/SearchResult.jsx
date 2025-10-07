import React, { useState } from 'react';
import styles from '../search/SearchResult.module.css';
import SearchResultItem from './SearchResultItem';
import Fuse from 'fuse.js';

function SearchResult({ products, query, closeSearch }) {
    if (!query) return null;

    const validProducts = products.filter(product => product.name);

    const fuse = new Fuse(validProducts, {
        keys: ['name', 'category'],
        threshold: 0.4,
        ignoreLocation: true,
    });

    const results = fuse.search(query);
    const filteredProducts = results.map(result => result.item);

    console.log("Fuse results:", filteredProducts);

    if (filteredProducts.length === 0) {
        return (
            <div className={styles.searchResults}>
                <p className={styles.noResults}>No products found</p>
            </div>
        );
    }

    const [showAll, setShowAll] = useState(false);
    const hasMore = filteredProducts.length > 5;

    return (
        <SearchResultItem
            filteredProducts={showAll ? filteredProducts : filteredProducts.slice(0, 5)}
            closeSearch={closeSearch}
            showAll={showAll}
            setShowAll={setShowAll}
            hasMore={hasMore}
        />
    );
}

export default SearchResult;