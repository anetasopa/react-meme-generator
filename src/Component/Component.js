import { useState } from 'react';
// import { ShimmerButton } from 'react-shimmer-effects';
import styles from './component.module.css';
import Form from './Form/Form';
import Header from './Header/Header';
import Image from './Image/Image';

function Component() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [template, setTemplate] = useState('doge');
  const [imageUrl, setImageUrl] = useState(
    `https://api.memegen.link/images/${template}/${topText}${bottomText}_`,
  );

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <Form
          topText={topText}
          setTopText={setTopText}
          bottomText={bottomText}
          setBottomText={setBottomText}
          template={template}
          setTemplate={setTemplate}
          setImageUrl={setImageUrl}
        />
        <Image imageUrl={imageUrl} template={template} />
      </div>
    </div>
  );
}

export default Component;
