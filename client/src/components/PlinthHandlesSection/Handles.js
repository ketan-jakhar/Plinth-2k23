import React from "react";
import styles from './Handles.module.css'
import Youtube from './Images/Youtube.png'
import Instagram from './Images/Instagram.png'
import Facebook from './Images/Facebook.png'
import Twitter from './Images/Twitter.png'

export const  Handles = () => {
    return (
        <div className={`${styles.HandleContainer}`}>
            <div className={[styles.Handles, styles.Youtube].join(' ')}>
                <img src={Youtube}  alt='' className={`${styles.icons}`}/>
            </div>
            <div className={`${styles.Handles}`}>
                <img src={Instagram} alt='' className={`${styles.icons}`}/>
            </div>
            <div className={`${styles.Handles}`}>
                <img src={Facebook} alt='' className={`${styles.icons}`}/>
            </div>
            <div className={`${styles.Handles}`}>
                <img src={Twitter} alt='' className={`${styles.icons}`}/>
            </div>
        </div>
    );
}



