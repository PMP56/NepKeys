import { EnglishText } from "./texts/english";
import { NepaliText } from "./texts/nepali";

export const shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// const Text = EnglishText;

const shorten = (array, chars = 60) => {
    let tempArray = [];
    let tempText = "";
    for(let i=0; i< array.length; i++){

        let currentSentence;

        if (tempText.length != 0){
            currentSentence = tempText + ". " + array[i];
            tempText = "";
        }else{
            currentSentence  = array[i];
        }
        let len = currentSentence.length

        if (len < 50){
            tempText = currentSentence;
        }
        else if (len > chars){
            var trimmedString = currentSentence.substr(0, Math.floor(len/2));
            trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));

            var trimmedString2 = currentSentence.substr(trimmedString.length, len) + ".";
            tempArray = [...tempArray, trimmedString, trimmedString2];

        }else if(len >= 50 && len <= chars){
            tempArray.push(currentSentence + ".");
        }
    }
    return tempArray;
}

// const TextArray = shorten(shuffle(Text.split(". ")));


export const TextList = (lang, len) => {
    const Text = (lang == 'English')? EnglishText : NepaliText;
    const TextArray = shorten(shuffle(Text.split(". ")), len);

    return TextArray.map(val => {
        if (val.charAt(0) == " ") {
            return val.substring(1);
        } else {
            return val;
        }
    })
}