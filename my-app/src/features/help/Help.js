import styles from "./Help.module.css";

function Help() {
  return (
    <div className={styles.help}>
      Play Hangman : the game pics a random word, which the user must then
      attempt to guess letter-by-letter. Too many incorrect guesses result in
      loss of the game. Inconically the process of losing is depicted by your
      character being hanged. Start game by pressing "START GAME" button. PLay
      in typing a letter below...
    </div>
  );
}

export default Help;
