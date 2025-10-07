import React from 'react'
import styles from './Home.module.css'
import HomeAboutUs from './HomeAboutUs'
import HomeCategory from './HomeCategory'
import HomeBestSeller from './HomeBestSeller'
import Hero from '../Hero/Hero'

function Home() {
    return (
        <section className={styles.home}>
            <Hero />
            <HomeAboutUs />
            <HomeCategory />
            <HomeBestSeller />

        </ section>
    )
}

export default Home
