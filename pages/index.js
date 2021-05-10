import Head from 'next/head'
import { useContext, useState, useEffect, useRef } from 'react';

import Header from '../components/Header'
import Body from '../components/Body'

import styles from '../styles/Home.module.css'

import { TextContext } from '../components/TextContext'
import { TextList } from '../components/TextList';
import { route } from 'next/dist/next-server/server/router';

export default function Home(props) {
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

  const [theme, setTheme] = useState('color');

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
      if (window.scrollY > 40) {
        // console.log(window.scrollY);
        nav.style.backgroundColor = 'var(--textColor)';
        nav.style.color = 'var(--backColor)';
        nav.style.opacity = 0.9;
        logo.style.fill = 'var(--backColor)';
      } else {
        nav.style.backgroundColor = 'transparent';
        nav.style.color = 'var(--textColor)';
        nav.style.opacity = 1;
        logo.style.fill = 'var(--textColor)';
      }
    });
  }, [])


  const buttonPress = (e) => {
    e.preventDefault();
    let keyCode = e.keyCode;
    let element;

    if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 186 && keyCode <= 191) || (keyCode >= 219 && keyCode <= 222) || keyCode == 32) {
      changeLetterIndex(currentLetterIndex + 1);
      // setCurrentTotalLetters(totalLetters + 1);
      changeTotalLetters(totalLetters + 1);
      addUserText(e.key);

      //check if entered text is correct
      if (e.key == (TextList[currentSentenceIndex])[currentLetterIndex]) {
        // setCurrentTotalCorrectLetters(totalCorrectLetters + 1);
        changeTotalCorrectLetters(totalCorrectLetters + 1);
        if (keyCode == 32) {
          changeTotalWords(totalWords + 1);
        }
      }

      if (Math.floor(totalLetters) % 3 == 0) {
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

  const clickSlider = () => {
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
    <main className={`whole ${styles.container} ${(theme == 'light') ? styles.light : (theme == 'dark') ? styles.dark : styles.color}`} tabIndex="0" onKeyDown={buttonPress} onKeyUp={buttonRelease}>
      <Header lang={props.lang} />
      <Body lang={props.lang} fonts={props.fonts} theme={theme} clickSlider={clickSlider}>
        {props.children ? props.children : <div className={styles.information}>
          <h1 className={styles.informationHeader}>नेपाली - Nepali Typing Practice Online, Nepali Keyboard Layout, Nepali Typing Tutor and Typing Test Online</h1>
          <h4 className={styles.informationText}>NepKeys is an online typing practice and typing test site with different themes and layouts of keyboard that helps you improve your typing skill with the analytics tool integrated inside the website. You can learn to type in various languages such as English, Nepali, Hindi and Newari with different keyboard for each language. It is absolutely free to use and guides you along your journey of learning fast and accuate typing. It calculates your accuracy, total letter and words, words per minute i.e typing speed and more importantly shows different graphs of how you improved throughout the process. It also saves your progress so that you can continue on where you last left. </h4>
        </div>}
      </Body>
    </main>
  )
}
