import { useRouter } from 'next/router'
import Head from 'next/head'
import { Fragment, useEffect, useState } from 'react'
import BodyPage from '../index'

import styles from '../../styles/Home.module.css'
const Body = () => {

    return (
        <Fragment>
            <Head>
                <meta name='viewport' content="width=device-width, initial-scale=1" />
                <meta key="description" name="description" content="NepKeys is an online English typing practice site with English Keyboard available where you can practice English typing online, calculate and improve your typing speed and track your progress with the inbuilt analytics system." />
                <meta key="keywords" name="keywords" content="nepkeys, English typing, English typing practice, online typing, online English typing, type in English, type English, English type, typing tutor, English typeshala, improve English typing, fast English typing, improve typing spped, typing test, English typing for begineers, typing jobs, keyboard English, virtual keyboard, English keyboard, practice English typing, online, type in English, English online typing, type online English, type English, English type, English, typing speed, English typing speed, words per minuter, English typing jobs, typing freelancers" />
                <title>English Keyboard and English Typing Practice Online - NepKeys</title>
                <link rel="icon" href="/joy.ico" />
                <link rel="canonical" href="https://www.nepkeys.site/lang/en" />
            </Head>
            <BodyPage lang="English" fonts={{ "text": "24px", "upperKey": "10px", "lowerKey": "18px" }}>
                <div className={styles.wholeInformation}>
                    <div className={styles.information}>
                        <h1 className={styles.informationHeader}>English Typing Practice Online, English Keyboard Layout, English Typing Tutor and Typing Test Online</h1>
                        <h4 className={styles.informationText}>NepKeys is an online typing practice and typing test site with different themes and layouts of keyboard that helps you improve your typing skill with the analytics tool integrated inside the website. You can learn to type in various languages such as English, Nepali, Hindi and Newari with different keyboard for each language. It is absolutely free to use and guides you along your journey of learning fast and accuate typing. It calculates your accuracy, total letter and words, words per minute i.e typing speed and more importantly shows different graphs of how you improved throughout the process. It also saves your progress so that you can continue on where you last left. </h4>
                        <h1 className={styles.features}>
                            Feature of NepKeys
                     </h1>
                        <ul className={styles.featuresList}>
                            <li><h1 className={styles.featuresNumber}>Online English Typing Practice Anytime for Free</h1></li>
                            <li><h1 className={styles.featuresNumber}>English Typing Tutor with English Keyboard Layout Available</h1></li>
                            <li><h1 className={styles.featuresNumber}>Interchangeable Language to Practice Typing in Any Language</h1></li>
                            <li><h1 className={styles.featuresNumber}>Typing Test to Calcualte Words Per Minute and Accuracy Percentage</h1></li>
                            <li><h1 className={styles.featuresNumber}>Graphs and Charts to Show Your Progress Throughout and Compare with Other People.</h1></li>
                            <li><h1 className={styles.featuresNumber}>Next Generation Easy to use Typeshala with Scientific Calculation and Accurate Result.</h1></li>
                        </ul>
                    </div>
                </div>
            </BodyPage>
        </Fragment>
    );
}

export default Body;