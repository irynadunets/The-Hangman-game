import styles from "./GuessWord.module.css";
let i = 0;

function GuessWord(props) {
  return (
    <div className={styles.word}>
      {props.guessed.map((el) => (
        <span className={styles.letter} key={i++}>
          {el}
        </span>
      ))}
    </div>
  );
}

export default GuessWord;
