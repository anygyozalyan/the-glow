import React from "react";
import styles from "./HomeBestSeller.module.css";
import HomeBackgroundText from "./HomeBackgroundText";
import HomeBestSellerImage from "./HomeBestSellerImage";
import HomeBestSellerInfo from "./HomeBestSellerInfo";
import { homeBestSellerProduct } from "../../data/homeBestSeller";
import { useNavigate } from "react-router-dom";

function HomeBestSeller() {
    const navigate = useNavigate();

    const handleReadMore = () => {
        navigate(`/catalog/${homeBestSellerProduct.id}`);
    };

    return (
        <section className={styles["homeBestSeller"]}>
            <HomeBackgroundText />
            <div className={styles["homeBestSeller__container"]}>
                <HomeBestSellerImage
                    src={homeBestSellerProduct.img}
                    alt={homeBestSellerProduct.name}
                />
                <HomeBestSellerInfo
                    name={homeBestSellerProduct.name}
                    price={homeBestSellerProduct.price}
                    onReadMore={handleReadMore}
                />
            </div>
        </section>
    );
}

export default HomeBestSeller;