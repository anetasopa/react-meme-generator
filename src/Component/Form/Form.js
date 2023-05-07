import ButtonGenerate from './ButtonGenerate/ButtonGenerate';
import styles from './form.module.css';
import Inputs from './Inputs/Inputs';
import Select from './Select/Select';

function Form({
  setTopText,
  topText,
  bottomText,
  setBottomText,
  template,
  setTemplate,
  setImageUrl,
}) {
  function generateMeme(e) {
    e.preventDefault();
    let url = `https://api.memegen.link/images/${template}.jpg`;

    if (topText) {
      url = `https://api.memegen.link/images/${template}/${topText}.jpg`;
    }

    if (bottomText) {
      url = `https://api.memegen.link/images/${template}/_/${bottomText}.jpg`;
    }

    if (topText && bottomText) {
      url = `https://api.memegen.link/images/${template}/${topText}/${bottomText}.jpg`;
    }

    setImageUrl(url);
  }

  return (
    <form className={styles.form} onSubmit={(event) => event.preventDefault()}>
      <Inputs
        setTopText={setTopText}
        setBottomText={setBottomText}
        topText={topText}
        bottomText={bottomText}
      />
      <Select template={template} setTemplate={setTemplate} />
      <ButtonGenerate generateMeme={generateMeme} />
    </form>
  );
}

export default Form;
