import React, { useState, useRef } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useClickOutside } from "../shared/useClickOutside";
import styles from "./CatalogNavbar.module.css";
import { useCatalogFilter } from "../../context/CatalogFilterContext";

function CatalogMobileCategories() {
    const { selectedCategory, setSelectedCategory } = useCatalogFilter();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useClickOutside(dropdownRef, () => setDropdownOpen(false));

    const categories = ["all", "face", "body", "hair"];

    const handleSelect = (category) => {
        setSelectedCategory(category);
        setDropdownOpen(false);
    };

    return (
        <div>
            <div className={styles.categories__mobile} onClick={() => setDropdownOpen(prev => !prev)} ref={dropdownRef}>
                <span className={styles["categories__mobile-tab"]}>
                    Categories <MdOutlineKeyboardArrowDown className={styles.arrow__down} />
                </span>

                {dropdownOpen && (
                    <ul className={styles["categories-dropdown"]}>
                        {categories.map(category => (
                            <li
                                key={category}
                                onClick={() => handleSelect(category)}
                                className={selectedCategory === category ? styles.active : ""}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default CatalogMobileCategories;