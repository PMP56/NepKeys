import Head from 'next/head'
import { useContext, useState, useEffect, useRef, Fragment, forwardRef } from 'react';

import Header from '../components/Header'
import Keyboard from '../components/Keyboard'
import Score from '../components/Score'
import Texts from '../components/Texts'
import Analytics from '../components/Analytics'

import styles from '../styles/Home.module.css'

import { TextContext } from '../components/TextContext'
import { TextList } from '../components/TextList';

export default function Home() {
  const {
    currentLetterIndex,
    changeLetterIndex,
    currentSentenceIndex,
    changeSentenceIndex,
    userText,
    addUserText,
    totalLetters,
    changeTotalLetters,
    totalCorrectLetters,
    changeTotalCorrectLetters,
    totalWords,
    changeTotalWords,
    lettersVsAcc,
    changeLetterVsAcc
  } = useContext(TextContext);

  const navRef = useRef();

  //for graph data
  const [currentTotalLetters, setCurrentTotalLetters] = useState(0);
  const [currentTotalCorrectLetters, setCurrentTotalCorrectLetters] = useState(0);
  const [currentAccuracy, setCurrentAccuracy] = useState(0);

  const [theme, setTheme] = useState('color');
  const [isOpenAnalytics, setIsOpenAnalytics] = useState(false);

  useEffect(() => {
    let theme = localStorage.getItem('theme');
    if (theme) {
      setTheme(theme);
    } else {
      setTheme('color');
    }
  }, [0])

  useEffect(() => {
    document.querySelector('main').focus();
    window.addEventListener('scroll', () => {
      let nav = document.querySelector('header');
      let logo = document.querySelector('#logo');
      if (window.scrollY > 10) {
        // console.log(window.scrollY);
        nav.style.backgroundColor = 'var(--textColor)';
        nav.style.color = 'var(--backColor)';
        nav.style.opacity = 0.8;
        logo.style.fill = 'var(--backColor)';
      } else {
        nav.style.backgroundColor = 'transparent';
        nav.style.color = 'var(--textColor)';
        nav.style.opacity = 1;
        logo.style.fill = 'var(--textColor)';
      }
    });
  }, [])

  const openAnalytics = () => {
    setIsOpenAnalytics(!isOpenAnalytics);
    setTimeout(() => {
      if (!isOpenAnalytics) {
        window.scrollTo({
          top: 1000,
          left: 0,
          behavior: 'smooth'
        });
      }
    }, 5)
  }

  const buttonPress = (e) => {
    e.preventDefault();
    let keyCode = e.keyCode;
    let element;

    if ((keyCode >= 65 && keyCode <= 90) || keyCode == 32) {
      changeLetterIndex(currentLetterIndex + 1);
      setCurrentTotalLetters(totalLetters + 1);
      changeTotalLetters(totalLetters + 1);
      addUserText(e.key);

      //check if entered text is correct
      if (e.key == (TextList[currentSentenceIndex])[currentLetterIndex]) {
        setCurrentTotalCorrectLetters(totalCorrectLetters + 1);
        changeTotalCorrectLetters(totalCorrectLetters + 1);
        if (keyCode == 32) {
          changeTotalWords(totalWords + 1);
        }
      }

      if (Math.floor(totalLetters) % 3 == 0) {
        // console.log('5 down')
        let accuracy = Math.ceil(totalCorrectLetters * 100 / totalLetters);
        changeLetterVsAcc(prevState => ({
          letters: [...prevState.letters, Math.floor(totalLetters)],
          acc: [...prevState.acc, accuracy]
        }));
      }
    }

    if (keyCode == 16 || keyCode == 17 || keyCode == 18) {
      element = document.querySelector(`.${e.code}`);
    } else {
      element = document.querySelector(`.key-${keyCode}`);
    }
    element.style.backgroundColor = 'var(--keyPressColor)';
    element.style.color = 'var(--keyPressTextColor)';

  }
  const buttonRelease = (e) => {
    let keyCode = e.keyCode;
    let element;
    if (keyCode == 16 || keyCode == 17 || keyCode == 18) {
      element = document.querySelector(`.${e.code}`);
    } else {
      element = document.querySelector(`.key-${keyCode}`);
    }
    element.style.backgroundColor = 'var(--keyColor)';
    element.style.color = 'var(--textColor)';
  }

  const Slider = () => {
    const click = () => {
      if (theme == 'light') {
        setTheme('dark');
        localStorage.setItem('theme', 'dark');
      } else if (theme == 'dark') {
        setTheme('color');
        localStorage.setItem('theme', 'color');
      } else {
        setTheme('light');
        localStorage.setItem('theme', 'light');
      }
    }

    return (
      <div className={styles.buttonBox}>
        <div className={styles.buttonContainer}>
          <button className={styles.themeButton} onClick={click}>{theme.toUpperCase()}</button>
        </div>
        <h3 className={styles.buttonName}>Change Theme</h3>
      </div>
    )
  }

  return (
    <main className={`whole ${styles.container} ${(theme == 'light') ? styles.light : (theme == 'dark') ? styles.dark : styles.color}`} tabIndex="0" onKeyDown={buttonPress} onKeyUp={buttonRelease}>
      <Head>
        <meta name='viewport' content="width=device-width, initial-scale=1" />
        <title>NepKeys - Nepali Keyboard and Nepali Typing Practice Online</title>
        <link rel="icon" href="/joy.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet"></link>
      </Head>

      <Header />
      <div className={styles.mainBody}>
        <div className={styles.toolBox}>
          <Score openAnalytics={openAnalytics} />
          <Slider />
        </div>
        <Texts />
        <Keyboard />
      </div>
      <div className={styles.information}>
        <h4 className={styles.informationText}>NepKeys is an online Nepali typing practice site with different layouts of Nepali keyboard that helps you improve your Nepali typing skill with the analytics tool integrated inside the website. It is absolutely free to use and guides you along your journey of learning Nepali typing. It calculates your accuracy, total letter and words, words per minute and more importantly shows different graphs of how you improved throughout the process. It also saves your progress so that you can continue on where you last left. </h4>
      </div>

      {(isOpenAnalytics) ? <Analytics /> : <Fragment />}

    </main>
  )
}
