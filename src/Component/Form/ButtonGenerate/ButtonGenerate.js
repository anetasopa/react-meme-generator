import styles from './buttonGenerate.module.css';

function ButtonGenerate({ generateMeme }) {
  return (
    <button className={styles.button} onClick={generateMeme}>
      Generate Meme
    </button>
  );
}

export default ButtonGenerate;
