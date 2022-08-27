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
                <meta key="description" name="description" content="NepKeys is an online Nepali typing practice site with Nepali Keyboard available where you can practice Nepali typing online, calculate and improve your typing speed and track your progress with the inbuilt analytics system." />
                <meta key="keywords" name="keywords" content="nepkeys, Nepali typing, Nepali typing practice, online typing, online Nepali typing, type in Nepali, type Nepali, Nepali type, typing tutor, Nepali typeshala, improve Nepali typing, fast Nepali typing, improve typing spped, typing test, Nepali typing for begineers, typing jobs, keyboard Nepali, virtual keyboard, Nepali keyboard, practice Nepali typing, online, type in Nepali, Nepali online typing, type online Nepali, type Nepali, Nepali type, Nepali, typing speed, Nepali typing speed, words per minuter, Nepali typing jobs, typing freelancers" />
                <title>Nepali Keyboard and Nepali Typing Practice Online - NepKeys</title>
                <link rel="icon" href="/joy.ico" />
                <link rel="canonical" href="https://www.nepkeys.site/lang/np" />
            </Head>
            <BodyPage lang="Nepali" fonts={{ "text": "40px", "upperKey": "19px", "lowerKey": "24px" }} >
                <div className={styles.wholeInformation}>
                    <div className={styles.information}>

                        <h1 className={styles.informationHeader}>नेपाली - Nepali Typing Practice Online, Nepali Keyboard Layout, Nepali Typing Tutor and Typing Test Online</h1>
                        <h4 className={styles.informationText}>NepKeys is an online typing practice and typing test site with different themes and layouts of keyboard that helps you improve your typing skill with the analytics tool integrated inside the website. You can learn to type in various languages such as English, Nepali, Nepali and Newari with different keyboard for each language. It is absolutely free to use and guides you along your journey of learning fast and accuate typing. It calculates your accuracy, total letter and words, words per minute i.e typing speed and more importantly shows different graphs of how you improved throughout the process. It also saves your progress so that you can continue on where you last left. </h4>
                        <h1 className={styles.features}>
                            Feature of NepKeys
                        </h1>
                        <ul className={styles.featuresList}>
                            <li><h1 className={styles.featuresNumber}>Online Nepali Typing Practice Anytime for Free</h1></li>
                            <li><h1 className={styles.featuresNumber}>Nepali Typing Tutor with Nepali Keyboard Layout Available</h1></li>
                            <li><h1 className={styles.featuresNumber}>Interchangeable Language to Practice Typing in Any Language</h1></li>
                            <li><h1 className={styles.featuresNumber}>Typing Test to Calcualte Words Per Minute and Accuracy Percentage</h1></li>
                            <li><h1 className={styles.featuresNumber}>Graphs and Charts to Show Your Progress Throughout and Compare with Other People.</h1></li>
                            <li><h1 className={styles.featuresNumber}>Next Generation Easy to use Typeshala with Scientific Calculation and Accurate Result.</h1></li>
                        </ul>
                    </div>
                    <h1 className={styles.features}>
                Why is Nepali typing important and is it important to learn Nepali typing?
              </h1>
              <h4 className={styles.informationText}>Nepali typing is essential for almost all Nepalese involved in any sort of field whether that be public sector (for all ranking officers), teaching sector or private/corporate companies. It is more important than ever to learn typing in 2021 because every economic sector has now moved to online and people can start work from home for various jobs such as Nepali Typing, Data Entry and Translation jobs. Researches have shown that people who can type fluently in other languages have better typing skill in English than the remaining population. Learning to type in Nepali improves your overall typing skill and your Nepali vocabulary. There used to be a program called Typeshala many years ago to practice Nepali typing but it didn’t have any mathematical tools to measure your speed or track your progress all along. In fact, there is no real program/website today that accurately measures your Nepali typing speed and guide you to improve your typing. This is where NepKeys come in.</h4>
                </div>
            </BodyPage>
        </Fragment>
    );
}

export default Body;