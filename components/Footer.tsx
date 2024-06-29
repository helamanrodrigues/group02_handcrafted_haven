"use client";

import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

const Footer: React.FC = () => {
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  );

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.left}>
          <p>Folklore Flowers ✣ Door County, Wisconsin ✣</p>
        </div>
        <div className={styles.center}>
          <p>Contact Us</p>
          <p>+555 013913094</p>
          <p>myemail@test.com</p>
        </div>
        <div className={styles.right}>
          <p>Follow Us</p>
          <p>FB</p>
          <p>TW</p>
          <p>INS</p>
          <p>LKD</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        &copy; <span>{currentYear}</span> Website by Group 02
      </div>
    </footer>
  );
};

export default Footer;
