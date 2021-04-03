import Head from 'next/head'
import { useContext, useState, useEffect } from 'react';

import Header from '../components/Header'
import Keyboard from '../components/Keyboard'
import Text from '../components/Texts'
import styles from '../styles/Home.module.css'

import { TextContext } from '../components/TextContext'
import Texts from '../components/Texts';

export default function Home() {
  const {
    currentLetterIndex,
    changeLetterIndex,
    currentSentenceIndex,
    changeSentenceIndex,
    userText,
    addUserText
  } = useContext(TextContext);

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    let theme = localStorage.getItem('theme');
    if (theme) {
      setTheme(theme);
    } else {
      setTheme('light');
    }
  }, [0])


  const buttonPress = (e) => {
    e.preventDefault();
    let keyCode = e.keyCode;
    let element;

    if ((keyCode >= 65 && keyCode <= 90) || keyCode == 32) {
      changeLetterIndex(currentLetterIndex + 1);
      addUserText(e.key);
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
      <div className={styles.buttonContainer}>
        <button className={styles.themeButton} onClick={click}>{theme.toUpperCase()}</button>
      </div>
    )
  }

  return (
    <main className={`${styles.container} ${(theme == 'light') ? styles.light : (theme == 'dark') ? styles.dark : styles.color}`} tabIndex="0" onKeyDown={buttonPress} onKeyUp={buttonRelease}>
      <Head>
        <title>NepKeys : Practice Nepali Typing Online</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name='keywords' content='practice nepali typing online, nepali typing, nepali, typing, online' />
        <meta name="description" content="Practice Nepali Typing Online | Increase your nepali typing skills" />
        <meta name='viewport' content="width=device-width, initial-scale=1"></meta>
        <link rel="icon" href="/joy.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet"></link>
      </Head>

      <Header />
      <Slider />
      <Texts />
      <Keyboard />
    </main>
  )
}
