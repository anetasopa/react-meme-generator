import ButtonDownload from './ButtonDownload/ButtonDownload';
import styles from './image.module.css';

function Image({ imageUrl, template }) {
  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        src={imageUrl}
        alt="Meme"
        data-test-id="meme-image"
      />
      <ButtonDownload template={template} imageUrl={imageUrl} />
    </div>
  );
}

export default Image;
