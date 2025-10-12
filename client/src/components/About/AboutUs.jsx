import React from 'react';
import styles from './AboutUs.module.css';
import AboutMission from './AboutMission';
import AboutValues from './AboutValues';
import AboutTeam from './AboutTeam';
import AboutCTA from './AboutCTA';

function AboutUs() {
    return (
        <div className={styles['about-us']}>
            <AboutMission />
            <AboutValues />
            <AboutTeam />
            <AboutCTA />
        </div>
    );
}

export default AboutUs;