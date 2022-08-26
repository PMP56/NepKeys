import { useContext, useState, useEffect, useRef, Fragment } from 'react';
import Header from '../components/Header'
import dynamic from 'next/dynamic';

import styles from '../styles/Home.module.css'
import { TextContext } from '../components/TextContext'
import { TextList } from '../components/TextList';

// const Body = dynamic(() => import('../components/Body'))
import Body from '../components/Body';
import { SettingContext } from '../context/SettingContext';

export default function Home(props) {
  const {
    lang,
    currentLetterIndex,
    changeLetterIndex,
    currentSentenceIndex,
    addUserText,
    popUserText,
    totalLetters,
    changeTotalLetters,
    totalCorrectLetters,
    changeTotalCorrectLetters,
    totalWords,
    changeTotalWords,
    changeLetterVsAcc
  } = useContext(TextContext);

  const {zen, setZen} = useContext(SettingContext);
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
  }, [])


  const buttonPress = (e) => {
    e.preventDefault();
    let keyCode = e.keyCode;
    let element;

    if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 186 && keyCode <= 191) || (keyCode >= 219 && keyCode <= 222) || keyCode == 32) {
      changeLetterIndex(currentLetterIndex + 1);
      changeTotalLetters(totalLetters + 1);
      addUserText(e.key);

      //check if entered text is correct
      if (e.key == (TextList(lang)[currentSentenceIndex])[currentLetterIndex]) {
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

    if (keyCode == 8){
      if (currentLetterIndex > 0){
        changeLetterIndex(currentLetterIndex - 1);
        popUserText();
        // changeTotalLetters(totalLetters - 1);
        // addUserText(e.key);
      }
    }

    if (!zen){
      if (keyCode == 16 || keyCode == 17 || keyCode == 18) {
        element = document.querySelector(`.${e.code}`);
      } else {
        element = document.querySelector(`.key-${keyCode}`);
      }
      element.style.backgroundColor = 'var(--keyPressColor)';
      element.style.color = 'var(--keyPressTextColor)';
    }

  }
  const buttonRelease = (e) => {
    let keyCode = e.keyCode;
    let element;
    if (!zen){
      if (keyCode == 16 || keyCode == 17 || keyCode == 18) {
        element = document.querySelector(`.${e.code}`);
      } else {
        element = document.querySelector(`.key-${keyCode}`);
      }
      element.style.backgroundColor = 'var(--keyColor)';
      element.style.color = 'var(--textColor)';
    }
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
        {props.children ? props.children : <div className={styles.wholeInformation}>
          <div id="information" className={styles.information}>
            <h1 className={styles.informationHeader}>नेपाली - Nepali Typing Practice Online, Nepali Keyboard Layout, Nepali Typing Tutor and Typing Test Online</h1>
            <h4 className={styles.informationText}>NepKeys is an online Nepali typing practice, typing tutor and typing test site with different themes and layouts of Nepali keyboard that helps you improve your Nepali typing skill with the analytics tool integrated inside the website. You can learn to type in various languages such as English, Nepali, Hindi and Newari with different keyboard for each language. It is absolutely free to use and guides you along your journey of learning fast and accuate typing. It calculates your accuracy, total letter and words, words per minute i.e typing speed and more importantly shows different graphs of how you improved throughout the process. It also saves your progress so that you can continue on where you last left. </h4>
            <h1 className={styles.features}>
              Feature of NepKeys
            </h1>
            <ul className={styles.featuresList}>
              <li><h1 className={styles.featuresNumber}>Practice Nepali Typing Online Anytime for Free</h1></li>
              <li><h1 className={styles.featuresNumber}>Nepali Typing Tutor with Nepali Keyboard Layout Available</h1></li>
              <li><h1 className={styles.featuresNumber}>Interchangeable Language to Practice Typing in Any Language</h1></li>
              <li><h1 className={styles.featuresNumber}>Nepali Typing Test to Calcualte Words Per Minute and Accuracy Percentage</h1></li>
              <li><h1 className={styles.featuresNumber}>Graphs and Charts to Show Your Progress Throughout and Compare with Other People.</h1></li>
              <li><h1 className={styles.featuresNumber}>Next Generation Easy to use Nepali Typeshala with Scientific Calculation and Accurate Result.</h1></li>
            </ul>
            <h1 className={styles.features}>
              Why is Nepali typing important and is it important to learn Nepali typing?
            </h1>
            <h4 className={styles.informationText}>Nepali typing is essential for almost all Nepalese involved in any sort of field whether that be public sector (for all ranking officers), teaching sector or private/corporate companies. It is more important than ever to learn typing in 2021 because every economic sector has now moved to online and people can start work from home for various jobs such as Nepali Typing, Data Entry and Translation jobs. Researches have shown that people who can type fluently in other languages have better typing skill in English than the remaining population. Learning to type in Nepali improves your overall typing skill and your Nepali vocabulary. There used to be a program called Typeshala many years ago to practice Nepali typing but it didn’t have any mathematical tools to measure your speed or track your progress all along. In fact, there is no real program/website today that accurately measures your Nepali typing speed and guide you to improve your typing. This is where NepKeys come in.</h4>
          </div>
        </div>}
      </Body>
    </main>
  )
}
