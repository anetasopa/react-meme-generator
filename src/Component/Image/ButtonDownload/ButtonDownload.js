import styles from './buttonDownload.module.css';

function ButtonDownload({ imageUrl }) {
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
    <a className={styles.a} target="_blank" href={imageUrl} download>
      <button className={styles.button} onClick={() => downloadImage()}>
        Download
      </button>
    </a>
  );
}

export default ButtonDownload;
