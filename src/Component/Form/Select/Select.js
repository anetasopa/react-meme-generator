import styles from './select.module.css';

function Select({ template, setTemplate }) {
  function chooseMemeTemplate(e) {
    setTemplate(e.target.value);
  }

  return (
    <div className={styles.container}>
      <label hidden>
        Meme template
        <input
          value={template}
          onFocus={(event) => (event.currentTarget.value = '')}
          onChange={(event) => {
            setTemplate(event.currentTarget.value);
          }}
        />
      </label>
      <label htmlFor="templateSelector">Select template</label>
      <select value={template} onChange={chooseMemeTemplate}>
        <option value="fry">Fry</option>
        <option value="doge">Doge</option>
        <option value="chosen">Chosen</option>
        <option value="cheems">Cheems</option>
        <option value="country">Country</option>
        <option value="crazypills">Crazypills</option>
        <option value="aag">Aag</option>
        <option value="center">Center</option>
        <option value="disastergirl">Disastergirl</option>
      </select>
    </div>
  );
}

export default Select;
