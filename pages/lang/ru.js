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
                <meta key="description" name="description" content="NepKeys is an online Russian typing practice site with Russian Keyboard available where you can practice Russian typing online, calculate and improve your typing speed and track your progress with the inbuilt analytics system." />
                <meta key="keywords" name="keywords" content="nepkeys, Russian typing, Russian typing practice, online typing, online Russian typing, type in Russian, type Russian, Russian type, typing tutor, Russian typeshala, improve Russian typing, fast Russian typing, improve typing spped, typing test, Russian typing for begineers, typing jobs, keyboard Russian, virtual keyboard, Russian keyboard, practice Russian typing, online, type in Russian, Russian online typing, type online Russian, type Russian, Russian type, Russian, typing speed, Russian typing speed, words per minuter, Russian typing jobs, typing freelancers" />
                <title>Russian Keyboard and Russian Typing Practice Online - NepKeys</title>
                <link rel="icon" href="/joy.ico" />
                <link rel="canonical" href="https://www.nepkeys.site/lang/ru" />
            </Head>
            <BodyPage lang="Russian" fonts={{ "text": "26px", "upperKey": "12px", "lowerKey": "20px" }}>
                <div className={styles.information}>
                    <h1 className={styles.informationHeader}>Pусский - Russian Typing Practice Online, Russian Keyboard Layout, Russian Typing Tutor and Typing Test Online</h1>
                    <h4 className={styles.informationText}>NepKeys is an online typing practice and typing test site with different themes and layouts of keyboard that helps you improve your typing skill with the analytics tool integrated inside the website. You can learn to type in various languages such as English, Nepali, Hindi and Newari with different keyboard for each language. It is absolutely free to use and guides you along your journey of learning fast and accuate typing. It calculates your accuracy, total letter and words, words per minute i.e typing speed and more importantly shows different graphs of how you improved throughout the process. It also saves your progress so that you can continue on where you last left. </h4>
                </div>
            </BodyPage>
        </Fragment>
    );
}

export default Body;