import { useState } from 'react';

export default function App() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [template, setTemplate] = useState('doge');
  const [imageUrl, setImageUrl] = useState(
    `https://api.memegen.link/images/${template}/${topText}${bottomText}.jpg`,
  );

  function generateMeme(e) {
    e.preventDefault();
    setImageUrl(
      `https://api.memegen.link/images/${template}/${topText}${bottomText}.jpg`,
    );
  }

  function handleTemplateChange(e) {
    console.log(e);
    setTemplate(e.target.value);
  }

  const download = () => {
    fetch(imageUrl, {
      method: 'GET',
      headers: {},
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form>
        <label htmlFor="topText">
          Top Text:
          <input
            type="topText"
            value={topText}
            onChange={(event) => setTopText(event.target.value)}
          />
        </label>
        <br />
        <label htmlFor="bottomText">
          Bottom Text:
          <input
            type="bottomText"
            value={bottomText}
            onChange={(event) => setBottomText(event.target.value)}
          />
        </label>
        <br />
        <label htmlFor="templateSelector">Meme Template:</label>
        <select value={template} onChange={handleTemplateChange}>
          <option value="doge">Doge</option>
          <option value="fry">Fry</option>
          <option value="zuckerberg">Zuckerberg</option>
          <option value="chosen">Chosen</option>
          <option value="cheems">Cheems</option>
          <option value="country">Country</option>
          <option value="crazypills">Crazypills</option>
        </select>
        <br />
        <button type="submit" onClick={generateMeme}>
          Generate Meme
        </button>
      </form>
      <br />
      <img src={imageUrl} alt="Meme" data-test-id="meme-image" />
      <br />
      <a href={imageUrl} download>
        <button onClick={() => download()}>Download</button>
      </a>
    </div>
  );
}
