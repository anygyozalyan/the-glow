import { useSelector } from "react-redux";
import styles from "./CheckoutPage.module.css";

function CheckoutPage() {
    const { items } = useSelector((state) => state.cart);

    const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className={styles.checkout}>
            <div className={styles.left}>
                <h2>Checkout</h2>

                <section className={styles.section}>
                    <h3>Shipping Address</h3>
                    <form className={styles.form}>
                        <input type="text" placeholder="Full name" required />
                        <input type="text" placeholder="Address" required />
                        <input type="text" placeholder="City" required />
                        <input type="text" placeholder="Postal code" required />
                        <input type="text" placeholder="Country" required />
                    </form>
                </section>

                <section className={styles.section}>
                    <h3>Payment Method</h3>
                    <div className={styles.paymentOptions}>
                        <label><input type="radio" name="payment" defaultChecked /> Credit Card</label>
                        <label><input type="radio" name="payment" /> PayPal</label>
                        <label><input type="radio" name="payment" /> Cash on Delivery</label>
                    </div>
                </section>
            </div>

            <div className={styles.right}>
                <h3>Order Summary</h3>

                <ul className={styles.summaryList}>
                    {items.map((item) => (
                        <li key={item.id}>
                            <span>{item.name} x {item.quantity}</span>
                            <span>${item.price * item.quantity}</span>
                        </li>
                    ))}
                </ul>

                <div className={styles.total}>
                    <strong>Total:</strong>
                    <span>${totalPrice.toFixed(2)}</span>
                </div>

                <button className={styles.checkoutBtn}>
                    Place Order
                </button>
            </div>
        </div>
    );
}

export default CheckoutPage;