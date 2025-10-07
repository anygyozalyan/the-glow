import React from 'react'
import { Link } from 'react-router-dom'
import { HiArrowUp } from "react-icons/hi";
import styles from './HomeAboutUs.module.css'

function HomeAboutUs() {

    return (
        <section className={styles.homeAbout} aria-label="About us">

            <Link to='/about-us' className={styles.homeAboutButton}>
                About us  <HiArrowUp className={styles.arrowUpIcon} />
            </Link>

            <p className={styles.homeAboutText}>
                The brand’s goal is to give a feeling of luxury.
                We create body, hair, and face care products designed not only to nourish and protect your skin, but also to bring everyday moments of self-care into the world of elegance and comfort.
                Our mission is to combine natural ingredients with modern formulas, so that each product helps you feel confident, radiant, and truly special.
            </p>

        </section>

    )
}

export default HomeAboutUs
