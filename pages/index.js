import Head from 'next/head'
import { useContext, useState, useEffect } from 'react';

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
    changeTotalWords
  } = useContext(TextContext);

  const [theme, setTheme] = useState('color');

  useEffect(() => {
    let theme = localStorage.getItem('theme');
    if (theme) {
      setTheme(theme);
    } else {
      setTheme('color');
    }
  }, [0])

  const buttonPress = (e) => {
    e.preventDefault();
    let keyCode = e.keyCode;
    let element;

    if ((keyCode >= 65 && keyCode <= 90) || keyCode == 32) {
      changeLetterIndex(currentLetterIndex + 1);
      changeTotalLetters(totalLetters + 1);
      addUserText(e.key);

      //check if entered text is correct
      if (e.key == (TextList[currentSentenceIndex])[currentLetterIndex]) {
        changeTotalCorrectLetters(totalCorrectLetters + 1);
        if (keyCode == 32) {
          changeTotalWords(totalWords + 1);
        }
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
    <main className={`${styles.container} ${(theme == 'light') ? styles.light : (theme == 'dark') ? styles.dark : styles.color}`} tabIndex="0" onKeyDown={buttonPress} onKeyUp={buttonRelease}>
      <Head>
        <meta name='viewport' content="width=device-width, initial-scale=1" />
        <title>NepKeys - Nepali Keyboard and Nepali Typing Practice Online</title>
        <link rel="icon" href="/joy.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet"></link>
      </Head>

      <Header />
      <div className={styles.mainBody}>
        <div className={styles.toolBox}>
          <Score />
          <Slider />
        </div>
        <Texts />
        <Keyboard />
      </div>
      <Analytics />
    </main>
  )
}
