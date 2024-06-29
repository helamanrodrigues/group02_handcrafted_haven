import Title from "./header/Title";
import Nav from "./header/Nav";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Nav side="left" />
      </div>
      <Title />
      <div className={styles.right}>
        <Nav side="right" />
      </div>
    </header>
  );
};

export default Header;
