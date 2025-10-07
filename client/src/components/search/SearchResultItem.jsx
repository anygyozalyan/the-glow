import React from 'react';
import styles from '../search/SearchResult.module.css';
import { Link } from "react-router-dom";

function SearchResultItem({ filteredProducts, closeSearch, showAll, setShowAll, hasMore }) {
    return (
        <div className={styles.searchOverlay}>
            <div className={styles.searchResults}>
                {filteredProducts.map(product => (
                    <Link key={product.id} onClick={closeSearch} to={`/catalog/${product.id}`}>
                        <div className={styles.resultItem}>
                            <img
                                src={product.img}
                                alt={product.name}
                                className={styles.resultImg}
                            />
                            <div className={styles.resultInfo}>
                                <span className={styles.resultName}>{product.name}</span>
                                <span className={styles.resultPrice}>{product.price}$</span>
                            </div>
                        </div>
                    </Link>
                ))}

                {hasMore && !showAll && (
                    <button className={styles.seeAllBtn} onClick={() => setShowAll(true)}>
                        See all results
                    </button>
                )}
            </div>
        </div>
    );
}

export default SearchResultItem;