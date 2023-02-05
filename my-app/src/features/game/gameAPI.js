import wordList from "./wordList";
import imgList from "./imgList";

function getRandomWord() {
  let randomIndex = Math.floor(Math.random() * wordList.length);
  return wordList[randomIndex];
}

export { getRandomWord, imgList };
