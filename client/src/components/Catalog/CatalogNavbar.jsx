import styles from "./CatalogNavbar.module.css";
import logo from "../../assets/theGlow-navbar-logo.png";
import { HiOutlineShoppingBag } from "react-icons/hi";
import CatalogMobileCategories from "./CatalogMobileCategories";
import SearchBlock from "../search/SearchBlock";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../../redux/cartSlice";
import { useCatalogFilter } from "../../context/CatalogFilterContext";

function CatalogNavbar() {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.items);
    const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

    const { selectedCategory, setSelectedCategory } = useCatalogFilter();

    const categories = ["all", "face", "body", "hair"];

    return (
        <nav className={styles.catalog__navbar}>
            <a href="/" className={styles.logoLink}>
                <img src={logo} className={styles.logo} alt="logo" />
            </a>

            <div className={styles["navbar__right-block"]}>
                <ul className={styles.categories}>
                    {categories.map(category => (
                        <li
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={selectedCategory === category ? styles.active : ""}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </li>
                    ))}
                </ul>

                <CatalogMobileCategories />
                <SearchBlock />

                <button className={styles.bag__icon} onClick={() => dispatch(toggleSidebar())}>
                    <HiOutlineShoppingBag />
                    {totalCount > 0 && <span className={styles.badge}>{totalCount}</span>}
                </button>
            </div>
        </nav>
    );
}

export default CatalogNavbar;