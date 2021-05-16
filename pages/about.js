import styles from '../styles/About.module.css'
import Link from 'next/link'
import NavBar from '../components/Header';
import Head from 'next/head';

const About = () => {
    return (
        <main className={styles.about}>
            <Head>
                <meta name='viewport' content="width=device-width, initial-scale=1" />
                <title>NepKeys - Nepali Keyboard and Nepali Typing Practice Online</title>
                <link rel="icon" href="/joy.ico" />
                <link rel="canonical" href="https://www.nepkeys.site/about" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet"></link>
            </Head>
            <NavBar />
            <div className={styles.info}>
                <p className={styles.quote}>
                    I already have it, but a good keyboard is invaluable when you spend a lot of time typing. — Marcus Persson
                </p>
                <p className={styles.informationText}>
                    <i>Good</i> typing skills have been the necessities of todays world. With every aspect of life being conducted through the means of computer, the basic skill of typing is essential for everyone. And it never harms to learn typing in your native or national language because you never know when it might prove to be useful.
                </p>
                <p className={styles.informationText}>
                    <i>Nepali</i> typing is essential for almost all Nepalese involved in any sort of field whether that be public sector (for all ranking officers), teaching sector or private/corporate companies. Researches have shown that people who can type fluently in other languages have better typing skill in English than the remaining population. Learning to type in Nepali improves your overall typing skill and your Nepali vocabulary. There used to be a program called Typeshala many years ago to practice Nepali typing but it didn’t have any mathematical tools to measure your speed or track your progress all along. In fact, there is no real program/website today that accurately measures your Nepali typing speed and guide you to improve your typing. This is where NepKeys come in.
                </p>
                <p className={styles.informationText}>
                    <i>NepKeys</i> is an online typing practice site with different themes and layouts of keyboard that helps you improve your typing skill with the analytics tool integrated inside the website. You can learn to type in various languages such as Nepali, English, Hindi and Newari with different keyboard for each language. It is absolutely free to use and guides you along your journey of learning typing. It calculates your accuracy, total letter and words, words per minute and more importantly shows different graphs of how you improved throughout the process. It also saves your progress so that you can continue on where you last left.
                </p>
            </div>
        </main>
    );
}

export default About;