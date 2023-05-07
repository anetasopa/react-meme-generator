import styles from './buttonGenerate.module.css';

function ButtonGenerate({ generateMeme }) {
  return (
    <div className={styles.container}>
      <button
        data-test-id="generate-meme"
        className={styles.button}
        onClick={generateMeme}
      >
        Generate Meme
      </button>
    </div>
  );
}

export default ButtonGenerate;
