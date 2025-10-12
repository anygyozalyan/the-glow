import React from 'react'
import { PiPlantDuotone } from "react-icons/pi";
import { MdOutlineHighQuality } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import styles from './AboutUs.module.css';

function AboutValues() {
    const valueItems = [
        {
            icon: <PiPlantDuotone />,
            title: 'Sustainability',
            description: 'We source ingredients responsibly and use eco-friendly packaging to minimize our environmental footprint.'
        },
        {
            icon: <MdOutlineHighQuality />,
            title: 'Quality',
            description: 'Every product undergoes rigorous testing to ensure the highest standards of excellence and performance.'
        },
        {
            icon: <FaRegHeart />,
            title: 'Transparency',
            description: 'We believe in honest communication about our ingredients, processes, and business practices.'
        }
    ];

    return (
        <section className={styles['about-values']}>
            <div className={styles['about-values__container']}>
                <h2 className={styles['about-values__title']}>Our Values</h2>
                <div className={styles['about-values__grid']}>
                    {valueItems.map((item, idx) => (
                        <div key={idx} className={styles['about-values__card']}>
                            <div className={styles['about-values__icon']}>{item.icon}</div>
                            <h3 className={styles['about-values__card-title']}>{item.title}</h3>
                            <p className={styles['about-values__card-description']}>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AboutValues
