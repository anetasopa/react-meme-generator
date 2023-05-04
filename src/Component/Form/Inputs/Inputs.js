import styles from './inputs.module.css';

function Inputs({ setTopText, setBottomText, topText, bottomText }) {
  return (
    <>
      <label htmlFor="topText">
        Top Text:
        <input
          type="topText"
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
        />
      </label>
      <label htmlFor="bottomText">
        Bottom Text:
        <input
          type="bottomText"
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
        />
      </label>
    </>
  );
}

export default Inputs;
