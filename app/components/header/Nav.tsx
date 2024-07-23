import Link from "next/link";
import styles from "../../styles/Nav.module.css";

interface NavProps {
  side: "left" | "right";
}

const Nav: React.FC<NavProps> = ({ side }) => {
  return (
    <nav className={styles.nav}>
      <ul
        className={side === "left" ? styles.navLinksLeft : styles.navLinksRight}
      >
        {side === "left" && (
          <>
            <li>
              <Link href="/login">Login</Link>
            </li>
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
              <Link href="/product-listing">Product Listing</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Nav;

