import React, { useRef, } from 'react'
import styles from './HomeCategory.module.css'
import { HiArrowUp, HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useCatalogFilter } from "../../context/CatalogFilterContext";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";

function HomeCategory() {
    const { setSelectedCategory } = useCatalogFilter();
    const navigate = useNavigate();

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    const toggleDisabled = (swiper) => {
        if (!prevRef.current || !nextRef.current) return;
        if (swiper.isBeginning) {
            prevRef.current.classList.add(styles.disabled);
        } else {
            prevRef.current.classList.remove(styles.disabled);
        }
        if (swiper.isEnd) {
            nextRef.current.classList.add(styles.disabled);
        } else {
            nextRef.current.classList.remove(styles.disabled);
        }
    };

    const handleCategoryClick = (category) => {
        const selected = category.toLowerCase();
        setSelectedCategory(selected);
        navigate("/catalog");
    };
    return (
        <section className={styles.homeCategory}>
            <div className={styles.customNav}>
                <button ref={prevRef} className={`${styles.navBtn} ${styles.prevBtn}`}>
                    <HiOutlineArrowNarrowLeft />
                </button>
                <button ref={nextRef} className={`${styles.navBtn} ${styles.nextBtn}`}>
                    <HiOutlineArrowNarrowRight />
                </button>
            </div>
            <Swiper
                modules={[Navigation]}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                    swiperRef.current = swiper;
                    toggleDisabled(swiper);
                }}
                onSlideChange={(swiper) => toggleDisabled(swiper)}
                onReachBeginning={(swiper) => toggleDisabled(swiper)}
                onReachEnd={(swiper) => toggleDisabled(swiper)}
                spaceBetween={16}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    600: {
                        slidesPerView: 2,
                    },
                    980: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 4,
                    },
                }}
                className={styles.homeCategoryBlock}
            >
                <SwiperSlide>
                    <div className={styles.categories} onClick={() => handleCategoryClick("Body")}>
                        <div className={styles.categoriesTop}>
                            <p className={styles.categoryName}>Body</p>
                            <HiArrowUp className={styles.arrowUpIcon} />
                        </div>
                        <img src='/images/1.png' alt="product image" className={styles.categoryProductImage} />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={styles.categories} onClick={() => handleCategoryClick("Face")}>
                        <div className={styles.categoriesTop}>
                            <p className={styles.categoryName}>Face</p>
                            <HiArrowUp className={styles.arrowUpIcon} />
                        </div>
                        <img src='/images/2.png' alt="product image" className={styles.categoryProductImage} />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={styles.categories} onClick={() => handleCategoryClick("Hair")}>
                        <div className={styles.categoriesTop}>
                            <p className={styles.categoryName}>Hair</p>
                            <HiArrowUp className={styles.arrowUpIcon} />
                        </div>
                        <img src='/images/3.png' alt="product image" className={styles.categoryProductImage} />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={styles.categories} onClick={() => handleCategoryClick("All")}>
                        <div className={styles.categoriesTop}>
                            <p className={styles.categoryName}>Other</p>
                            <HiArrowUp className={styles.arrowUpIcon} />
                        </div>
                        <img src='/images/4.png' alt="product image" className={styles.categoryProductImage} />
                    </div>
                </SwiperSlide>
            </Swiper>

        </section>
    )
}

export default HomeCategory
