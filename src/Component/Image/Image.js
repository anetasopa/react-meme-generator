import ButtonDownload from './ButtonDownload/ButtonDownload';
import styles from './image.module.css';

function Image({ imageUrl }) {
  return (
    <div>
      <img
        className={styles.img}
        src={imageUrl}
        alt="Meme"
        data-test-id="meme-image"
      />
      <ButtonDownload imageUrl={imageUrl} />
    </div>
  );
}

export default Image;
