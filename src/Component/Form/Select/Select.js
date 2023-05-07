import styles from './select.module.css';

function Select({ template, setTemplate }) {
  function chooseMemeTemplate(e) {
    setTemplate(e.target.value);
  }

  return (
    <div className={styles.container}>
      <label htmlFor="templateSelector">Select template</label>
      <select value={template} onChange={chooseMemeTemplate}>
        <option>Doge</option>
        <option value="fry">Fry</option>
        <option value="chosen">Chosen</option>
        <option value="cheems">Cheems</option>
        <option value="country">Country</option>
        <option value="crazypills">Crazypills</option>
        <option value="aag">Aag</option>
        <option value="center">Center</option>
        <option value="disastergirl">Disastergirl</option>
      </select>
      <label hidden="">
        Meme template
        <input value={template} onChange={(e) => setTemplate(e.target.value)} />
      </label>
    </div>
  );
}

export default Select;
