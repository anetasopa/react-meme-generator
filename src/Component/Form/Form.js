import Button from './Button/Button';
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
    setImageUrl(
      `https://api.memegen.link/images/${template}/${topText}/${bottomText}.jpg`,
    );
  }

  return (
    <form>
      <Inputs
        setTopText={setTopText}
        setBottomText={setBottomText}
        topText={topText}
        bottomText={bottomText}
      />
      <Select template={template} setTemplate={setTemplate} />
      <Button generateMeme={generateMeme} />
    </form>
  );
}

export default Form;
