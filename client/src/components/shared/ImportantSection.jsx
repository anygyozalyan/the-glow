import React from "react";
import Accordion from "./Accordion";
import styles from "../Catalog/Catalog.module.css";

function ImportantSection({ items }) {
    return (
        <div className={styles["catalog__important-section"]}>
            <p className={styles["catalog__important-title"]}>Important</p>
            <Accordion items={items} />
            <h2 className={styles["catalog__brand-name"]}>THE GLOW</h2>
        </div>
    );
}

export default ImportantSection;