import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Title from "../title/Title";
import Help from "../help/Help";
import GuessWord from "../guessWord/GuessWord";
import ShowImage from "../showImage/ShowImage";
import Result from "../result/Result";
import {
  checkGuessedLetter,
  selectImage,
  setRandomWord,
  restartGame,
  selectResult,
  selectGuessed,
} from "./gameSlice";
import styles from "./Game.module.css";

export function Game() {
  const stageImage = useSelector(selectImage);
  const result = useSelector(selectResult);
  const guessed = useSelector(selectGuessed);
  const dispatch = useDispatch();
  const [letter, setGuessedLetter] = useState("");
  const [help, setHelp] = useState(false);
  const [game, setGame] = useState(false);

  const startGame = () => {
    dispatch(setRandomWord());
    setGame(true);
    setGuessedLetter("");
  };
  const checkLetter = () => {
    dispatch(checkGuessedLetter(letter));
    setGuessedLetter("");
  };
  const newGame = () => {
    setGame(false);
    dispatch(restartGame());
    setGuessedLetter("");
  };

  return (
    <div>
      {/* show name of game */}
      <Title />
      {/* show help instruction to user when help button is clicked */}
      {help ? <Help /> : null}
      {/* start game or show help by clicking on appropriate button */}
      <div className={styles.row}>
        {!game ? (
          <button className={styles.asyncButton} onClick={(e) => startGame()}>
            START GAME
          </button>
        ) : (
          <button className={styles.asyncButton} onClick={() => newGame()}>
            NEW GAME
          </button>
        )}
        <button className={styles.asyncButton} onClick={(e) => setHelp(!help)}>
          {!help ? "HELP" : "close HELP"}
        </button>
      </div>
      {/* if start game button is clicked */}
      {game ? (
        <div>
          {/* show div for a guessed word */}
          <GuessWord guessed={guessed} />
          <div className={styles.row}>
            {/* show a field to type a guessed letter */}
            <input
              className={styles.textbox}
              aria-label="Guess a letter"
              value={letter}
              onChange={(e) => setGuessedLetter(e.target.value)}
            />
            {/* check a typed letter by clicked on button */}
            <button className={styles.button} onClick={checkLetter}>
              Check a letter
            </button>
          </div>
          {/* show appropriate image depending of number of incorrect letters*/}
          <ShowImage stageImage={stageImage} />
          {/* show name of game */}
          <Result result={result} />
        </div>
      ) : null}
    </div>
  );
}
