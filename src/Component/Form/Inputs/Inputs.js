import styles from './inputs.module.css';

function Inputs({ setTopText, setBottomText, topText, bottomText }) {
  return (
    <div className={styles.container}>
      <label htmlFor="topText">Top text</label>
      <input
        placeholder="Hello"
        id="topText"
        name="topText"
        value={topText}
        onChange={(e) => setTopText(e.target.value)}
      />
      <label htmlFor="bottomText">Bottom text</label>
      <input
        placeholder="World"
        id="bottomText"
        value={bottomText}
        onChange={(e) => setBottomText(e.target.value)}
      />
    </div>
  );
}

export default Inputs;
