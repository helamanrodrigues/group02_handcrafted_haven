import Title from './Title';
import Nav from './Nav';
import styles from './Header.module.css';

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