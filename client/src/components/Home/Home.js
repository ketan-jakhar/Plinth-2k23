import React from 'react'
import {Countdown} from '../Timer/Countdown/Countdown.js'
import {Handles} from '../PlinthHandlesSection/Handles.js'
import styles from './Home.module.css'
import '../../fonts/Absolute_Xero/Absolute_Xero.ttf'
import { WalterWhite } from '../WalterWhite/WalterWhite.js'

function Home() {
    const futureDate = new Date(2023,0,27)
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
                <WalterWhite/>
        </div>
        </>
    )
}

export default Home