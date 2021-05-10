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
                <meta key="description" name="description" content="NepKeys is an online Hindi typing practice site with Hindi Keyboard available where you can practice Hindi typing online, calculate and improve your typing speed and track your progress with the inbuilt analytics system." />
                <meta key="keywords" name="keywords" content="nepkeys, Hindi typing, Hindi typing practice, online typing, online Hindi typing, type in Hindi, type Hindi, Hindi type, typing tutor, Hindi typeshala, improve Hindi typing, fast Hindi typing, improve typing spped, typing test, Hindi typing for begineers, typing jobs, keyboard Hindi, virtual keyboard, Hindi keyboard, practice Hindi typing, online, type in Hindi, Hindi online typing, type online Hindi, type Hindi, Hindi type, Hindi, typing speed, Hindi typing speed, words per minuter, Hindi typing jobs, typing freelancers" />
                <title>NepKeys - Hindi Keyboard and Hindi Typing Practice Online</title>
                <link rel="icon" href="/joy.ico" />
            </Head>
            <BodyPage lang="Hindi" fonts={{ "text": "40px", "upperKey": "19px", "lowerKey": "24px" }} >
                <div className={styles.information}>
                    <h1 className={styles.informationHeader}>हिन्दी - Hindi Typing Practice Online, Hindi Keyboard Layout, Hindi Typing Tutor and Typing Test Online</h1>
                    <h4 className={styles.informationText}>NepKeys is an online typing practice and typing test site with different themes and layouts of keyboard that helps you improve your typing skill with the analytics tool integrated inside the website. You can learn to type in various languages such as English, Nepali, Hindi and Newari with different keyboard for each language. It is absolutely free to use and guides you along your journey of learning fast and accuate typing. It calculates your accuracy, total letter and words, words per minute i.e typing speed and more importantly shows different graphs of how you improved throughout the process. It also saves your progress so that you can continue on where you last left. </h4>
                </div>
            </BodyPage>
        </Fragment>
    );
}

export default Body;