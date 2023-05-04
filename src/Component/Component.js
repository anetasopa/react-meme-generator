import { useState } from 'react';
// import { ShimmerButton } from 'react-shimmer-effects';
// import styles from './component.module.css';
import Form from './Form/Form';
import Header from './Header/Header';

function Component() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [template, setTemplate] = useState('doge');
  const [imageUrl, setImageUrl] = useState(
    `https://api.memegen.link/images/${template}/${topText}${bottomText}.jpg`,
  );

  const downloadImage = setTimeout(() => {
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
  }, 5000);

  return (
    <div>
      <Header />
      <Form
        topText={topText}
        setTopText={setTopText}
        bottomText={bottomText}
        setBottomText={setBottomText}
        template={template}
        setTemplate={setTemplate}
        setImageUrl={setImageUrl}
      />
      <div>
        <img src={imageUrl} alt="Meme" data-test-id="meme-image" />
      </div>
      <a target="_blank" href={imageUrl} download>
        <button onClick={() => downloadImage()}>Download</button>
      </a>
    </div>
  );
}

export default Component;
