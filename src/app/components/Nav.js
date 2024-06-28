import Link from 'next/link';
import styles from './Nav.module.css';

const Nav = ({ side }) => {
  return (
    <nav className={styles.nav}>
      <ul className={side === "left" ? styles.navLinksLeft : styles.navLinksRight}>
        {side === "left" && (
          <>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </>
        )}
        {side === "right" && (
          <>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Nav;