import React from "react";
import styles from "../Catalog/Catalog.module.css";;
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

function AccordionItem({ item, isOpen, onClick }) {
    return (
        <div className={styles["accordion__item"]}>
            <div className={styles["accordion__header"]} onClick={onClick}>
                <p className={styles["accordion__question"]}>{item.question}</p>
                <span>{isOpen ? <HiChevronUp /> : <HiChevronDown />}</span>
            </div>
            {isOpen && (
                <div className={styles["accordion__content"]}>
                    <p className={styles["accordion__answer"]}>{item.answer}</p>
                </div>
            )}
        </div>
    );
}

export default AccordionItem;