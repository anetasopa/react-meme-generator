import styles from './select.module.css';

function Select({ template, setTemplate }) {
  function chooseMemeTemplate(e) {
    setTemplate(e.target.value);
  }

  return (
    <>
      <label htmlFor="templateSelector">Meme Template:</label>
      <select value={template} onChange={chooseMemeTemplate}>
        <option>Doge</option>
        <option value="fry">Fry</option>
        <option value="zuckerberg">Zuckerberg</option>
        <option value="chosen">Chosen</option>
        <option>Cheems</option>
        <option>Country</option>
        <option>Crazypills</option>
      </select>
    </>
  );
}

export default Select;
