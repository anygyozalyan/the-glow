import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import styles from "../Catalog/Catalog.module.css";;

function Accordion({ items }) {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={styles.accordion}>
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    item={item}
                    isOpen={openIndex === index}
                    onClick={() => toggleItem(index)}
                />
            ))}
        </div>
    );
}

export default Accordion;