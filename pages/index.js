import Head from 'next/head'
import { useContext } from 'react';

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
    element.style.backgroundColor = '#333';
    element.style.color = 'white';
  }
  const buttonRelease = (e) => {
    let keyCode = e.keyCode;
    let element;
    if (keyCode == 16 || keyCode == 17 || keyCode == 18) {
      element = document.querySelector(`.${e.code}`);
    } else {
      element = document.querySelector(`.key-${keyCode}`);
    }
    element.style.backgroundColor = 'white';
    element.style.color = 'black';
  }

  return (
    <div className={styles.container} tabIndex="0" onKeyDown={buttonPress} onKeyUp={buttonRelease}>
      <Head>
        <title>NepKeys : Practice Nepali Typing Online</title>
        <meta name='keywords' content='practice nepali typing online, nepali typing, nepali, typing, online' />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet"></link>
      </Head>

      <Texts />
      <Keyboard />
    </div>
  )
}
