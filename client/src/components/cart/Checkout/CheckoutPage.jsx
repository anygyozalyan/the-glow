import { useSelector } from "react-redux";
import { useState, useMemo } from "react";
import styles from "./CheckoutPage.module.css";

import ContactInformation from "./ContactInformation";
import ShippingAddress from "./ShippingAddress";
import PaymentMethod from "./PaymentMethod";
import OrderSummary from "./OrderSummary";

function CheckoutPage() {
    const { items } = useSelector((state) => state.cart);
    const [paymentMethod, setPaymentMethod] = useState("credit-card");
    const [selectedCountry, setSelectedCountry] = useState("");

    const shippingRates = {
        am: 0,
        ca: 10,
        uk: 20,
        us: 15,
    };

    const totalPrice = useMemo(
        () => items.reduce((acc, item) => acc + item.price * item.quantity, 0),
        [items]
    );

    // Tax
    const taxPrice = useMemo(() => totalPrice * 0.08, [totalPrice]);

    const calculateShipping = (country, total) => {
        if (!country) return 0;

        if (country === "am") return 0;

        const basePrice = shippingRates[country] ?? 0;

        return basePrice;
    };

    const shippingPrice = useMemo(
        () => calculateShipping(selectedCountry, totalPrice),
        [selectedCountry, totalPrice]
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Order placed!", {
            items,
            totalPrice,
            shippingPrice,
            taxPrice,
            selectedCountry,
        });
    };

    return (
        <div className={styles.checkoutPage}>
            <div className={styles.checkoutPage__container}>
                <header className={styles.checkoutPage__header}>
                    <h1 className={styles.checkoutPage__title}>Checkout</h1>
                </header>

                <form onSubmit={handleSubmit} className={styles.checkoutPage__content}>
                    <div className={styles.checkoutPage__left}>
                        <ContactInformation />
                        <ShippingAddress
                            selectedCountry={selectedCountry}
                            setSelectedCountry={setSelectedCountry}
                        />
                        <PaymentMethod
                            paymentMethod={paymentMethod}
                            setPaymentMethod={setPaymentMethod}
                        />
                    </div>

                    <div className={styles.checkoutPage__right}>
                        <OrderSummary
                            items={items}
                            totalPrice={totalPrice}
                            shippingPrice={shippingPrice}
                            taxPrice={taxPrice}
                            selectedCountry={selectedCountry}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CheckoutPage;