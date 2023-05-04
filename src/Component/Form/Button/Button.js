import styles from './button.module.css';

function Button({ generateMeme }) {
  return <button onClick={generateMeme}>Generate Meme</button>;
}

export default Button;
