import React, { useState, useRef } from "react";
import styles from "./SearchBlock.module.css";
import { FiSearch } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { useClickOutside } from "../shared/useClickOutside";
import { catalogProducts } from "../../data/catalogProducts.js";
import SearchResult from "./SearchResult.jsx";

const SearchBlock = () => {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");

    const clickOutsideRef = useRef(null);
    useClickOutside(clickOutsideRef, () => setOpen(false));

    const closeSearch = () => {
        setQuery("");
        setOpen(false);
    };

    return (
        <div className={styles.search__wrapper} ref={clickOutsideRef}>
            <button
                className={styles.search__icon}
                aria-label={open ? "Close search" : "Open search"}
                onClick={() => {
                    setQuery("");
                    setOpen(!open);
                }}
            >
                <FiSearch />
            </button>

            <div
                className={`${styles.search__bar} ${open ? styles["search__bar--open"] : styles["search__bar--closed"]
                    }`}
            >
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search..."
                    aria-label="Search input"
                    className={styles.search__input}
                />
                <button
                    className={styles["search__close-btn"]}
                    aria-label="Close search"
                    onClick={closeSearch}
                >
                    <IoMdClose className={styles["search__close-icon"]} />
                </button>
            </div>

            {open && (
                <>
                    <div
                        className={styles.search__overlay}
                        onClick={closeSearch}
                    />
                    <SearchResult
                        products={catalogProducts}
                        query={query}
                        closeSearch={closeSearch}
                    />
                </>
            )}
        </div>
    );
};

export default SearchBlock;