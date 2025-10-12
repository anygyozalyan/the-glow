import React from 'react'
import styles from './AboutUs.module.css';

function AboutTeam() {
    const stats = [
        { number: '50+', label: 'Team Members' },
        { number: '15', label: 'Years Experience' },
        { number: '100k+', label: 'Happy Customers' }
    ];

    return (
        <section className={styles['about-team']}>
            <div className={styles['about-team__container']}>
                <div className={styles['about-team__content']}>
                    <div className={styles['about-team__text']}>
                        <h2 className={styles['about-team__title']}>Our Team</h2>
                        <p className={styles['about-team__description']}>
                            Founded by a group of passionate individuals who shared a vision
                            for better beauty products, our team has grown to include experts
                            in skincare, sustainability, and customer experience. Together,
                            we're committed to innovation and making a difference.
                        </p>
                        <div className={styles['about-team__stats']}>
                            {stats.map((stat, idx) => (
                                <div key={idx} className={styles['about-team__stat']}>
                                    <span className={styles['about-team__stat-number']}>{stat.number}</span>
                                    <span className={styles['about-team__stat-label']}>{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutTeam
