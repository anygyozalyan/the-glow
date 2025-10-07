import { useSelector, useDispatch } from "react-redux";
import { closeSidebar, removeFromCart } from "../../redux/cartSlice";
import CartSidebarItem from "./CartSidebarItem";
import { Link } from "react-router-dom";
import styles from "./CartSidebar.module.css";

function CartSidebar() {
    const dispatch = useDispatch();
    const { items, isSidebarOpen } = useSelector((state) => state.cart);
    const hasItems = items.length > 0;

    const handleRemove = (id) => dispatch(removeFromCart(id));

    return (
        <>
            {isSidebarOpen && (
                <div
                    className={styles["cart-sidebar__overlay"]}
                    onClick={() => dispatch(closeSidebar())}
                />
            )}

            <div
                className={`${styles["cart-sidebar"]}
                 ${isSidebarOpen ? styles["cart-sidebar--open"]
                        : ""
                    }`}
            >
                <div className={styles["cart-sidebar__panel"]}>
                    <button
                        className={styles["cart-sidebar__close-btn"]}
                        onClick={() => dispatch(closeSidebar())}
                        aria-label="Close cart sidebar"
                    >
                        Close
                    </button>

                    <h2 className={styles["cart-sidebar__title"]}>Shopping Bag</h2>

                    {!hasItems ? (
                        <>
                            <button
                                onClick={() => dispatch(closeSidebar())}
                                className={styles["cart-sidebar__continue-btn"]}
                                aria-label="Continue shopping"
                            >
                                Continue shopping
                            </button>
                        </>
                    ) : (
                        <>
                            <ul className={styles["cart-sidebar__items"]}>
                                {items.map(item => (
                                    <CartSidebarItem key={item.id} item={item} onRemove={handleRemove} />
                                ))}
                            </ul>

                            <div className={styles["cart-sidebar__footer"]}>
                                <Link
                                    to="/cart"
                                    className={styles["cart-sidebar__checkout-btn"]}
                                    onClick={() => dispatch(closeSidebar())}
                                    aria-label="Proceed to checkout"
                                >
                                    Checkout
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default CartSidebar;