import styles from "./Result.module.css";

function Result(props) {
  return <div className={styles.result}>{props.result}</div>;
}

export default Result;
