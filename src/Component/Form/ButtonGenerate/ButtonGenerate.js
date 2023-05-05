import styles from './buttonGenerate.module.css';

function ButtonGenerate({ generateMeme }) {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={generateMeme}>
        Generate Meme
      </button>
    </div>
  );
}

export default ButtonGenerate;
