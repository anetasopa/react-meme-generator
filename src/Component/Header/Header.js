import styles from './header.module.css';

function Header() {
  return (
    <div className={styles.component}>
      <h1>Meme Generator</h1>
      <span>Enter text for the top and bottom of the meme</span>
    </div>
  );
}

export default Header;
