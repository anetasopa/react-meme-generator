import styles from './inputs.module.css';

function Inputs({ setTopText, setBottomText, topText, bottomText }) {
  return (
    <div className={styles.container}>
      <label htmlFor="topText">
        Top text:
        <input
          placeholder="Hello"
          type="topText"
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
        />
      </label>
      <label htmlFor="bottomText">
        Bottom text:
        <input
          placeholder="World"
          type="bottomText"
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
        />
      </label>
    </div>
  );
}

export default Inputs;
