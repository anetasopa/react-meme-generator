import styles from './inputs.module.css';

function Inputs({ setTopText, setBottomText, topText, bottomText }) {
  return (
    <div className={styles.container}>
      <label>
        Top text
        <input
          placeholder="Hello"
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
        />
      </label>
      <label>
        Bottom text
        <input
          placeholder="World"
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
        />
      </label>
    </div>
  );
}

export default Inputs;
