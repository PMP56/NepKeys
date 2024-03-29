import { useContext, useState, useEffect, useRef, Fragment } from 'react';
import Header from '../components/Header'

import styles from '../styles/Home.module.css'
import { TextContext } from '../context/TextContext'
import { TextList } from '../components/TextList';
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
    lettersVsAcc,
    changeLetterVsAcc
  } = useContext(TextContext);

  const {zen, setZen} = useContext(SettingContext);
  const [theme, setTheme] = useState('color');
  const [allText,setAllText] = useState(null);

  useEffect(() => {
      if (lang == "English"){
          let temp = TextList(lang, 70)
          setAllText(temp)
      }else{
          let temp = TextList(lang, 50)
          setAllText(temp)
      }
  }, [0])

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
      
      //check if entered text is correct
      if (allText){
        if (e.key == (allText[currentSentenceIndex])[currentLetterIndex]) {
          changeTotalCorrectLetters(totalCorrectLetters + 1);
          if (keyCode == 32) {
            changeTotalWords(totalWords + 1);
          }
        }
      }

      changeLetterIndex(currentLetterIndex + 1);
      changeTotalLetters(totalLetters + 1);
      addUserText(e.key);

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
        // console.log(lettersVsAcc.letters)
        // changeLetterVsAcc(prevState => ({
        //   letters: prevState.letters.slice(0, -1),
        //   acc: prevState.acc.slice(0, -1)
        // }))
        // changeTotalCorrectLetters(totalCorrectLetters - 1);
        // changeTotalLetters(totalLetters - 1);
        changeLetterIndex(currentLetterIndex - 1);
        popUserText();
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
      {(allText)?
        <Body lang={props.lang} fonts={props.fonts} theme={theme} clickSlider={clickSlider} allText={allText}>
          {props.children ? props.children : <div className={styles.wholeInformation}>
            <div id="information" className={styles.information}>
              <h1 className={styles.informationHeader}>English Typing Practice Online, English Keyboard Layout, English Typing Tutor and Typing Test Online</h1>
              <h4 className={styles.informationText}>NepKeys is an online typing practice and typing test site with different themes and layouts of keyboard that helps you improve your typing skill with the analytics tool integrated inside the website. You can learn to type in various languages such as English, Nepali, Hindi and Newari with different keyboard for each language. It is absolutely free to use and guides you along your journey of learning fast and accuate typing. It calculates your accuracy, total letter and words, words per minute i.e typing speed and more importantly shows different graphs of how you improved throughout the process. It also saves your progress so that you can continue on where you last left. </h4>
              <h1 className={styles.features}>
                  Feature of NepKeys
              </h1>  
              <ul className={styles.featuresList}>
                <li><h1 className={styles.featuresNumber}>Online English Typing Practice Anytime for Free</h1></li>
                <li><h1 className={styles.featuresNumber}>English Typing Tutor with English Keyboard Layout Available</h1></li>
                <li><h1 className={styles.featuresNumber}>Interchangeable Language to Practice Typing in Any Language</h1></li>
                <li><h1 className={styles.featuresNumber}>Typing Test to Calcualte Words Per Minute and Accuracy Percentage</h1></li>
                <li><h1 className={styles.featuresNumber}>Graphs and Charts to Show Your Progress Throughout and Compare with Other People.</h1></li>
                <li><h1 className={styles.featuresNumber}>Next Generation Easy to use Typeshala with Scientific Calculation and Accurate Result.</h1></li>
            </ul>
            </div>
          </div>}
        </Body> : <Fragment />
      }
    </main>
  )
}
