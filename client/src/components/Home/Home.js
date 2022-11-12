import React from 'react'
import { add } from 'date-fns';
import {Countdown} from '../Timer/Countdown/Countdown.js'
import {Handles} from '../PlinthHandlesSection/Handles.js'
import styles from './Home.module.css'
import '../../fonts/Absolute_Xero/Absolute_Xero.ttf'
function Home() {
    const futureDate = add(new Date(), {
        days: 6,
        hours: 22,
        minutes: 40
      });
    return (
        <>
        <div className={`${styles.homeContainer}`}>
            <div className={`${styles.homeGradientLayer}`}>
                <div className={`${styles.PlinthHeading}`}>
                    <div className={`${styles.PlinthTitle}`}>PLINTH'  </div>
                    <div className={`${styles.PlinthYear}`}>23</div>
                </div>
                <div className={`${styles.SubHeading}`}>
                    <div className={`${styles.HrLine}`} />
                    <div>
                        <p className={`${styles.PlinthTag}`}>TECHNO MANAGEMENT FEST</p>
                    </div>

                </div>
            </div>
            <button className={`${styles.RegisterButton}`}>REGISTER</button>
            <div className={`${styles.homeGradientLayerRev}`}>
                <div className={`${styles.CountdownContainer}`}>
                    <div className={`${styles.CountdownHeading}`}>STARTS IN </div>
                </div>
                <div className={`${styles.Countdown}`}>
                    <Countdown futureDate={futureDate}/>
                </div>
            </div>
            <Handles/>
        </div>
        </>
    )
}

export default Home