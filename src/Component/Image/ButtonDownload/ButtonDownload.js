import saveAs from 'file-saver';
/* eslint-disable no-restricted-syntax */
import styles from './buttonDownload.module.css';

function ButtonDownload({ imageUrl, template }) {
  const downloadImage = () => {
    const url = imageUrl;
    saveAs(url, template);
  };

  return (
    <button className={styles.button} onClick={() => downloadImage()}>
      Download
    </button>
  );
}

export default ButtonDownload;
