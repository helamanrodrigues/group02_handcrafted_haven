"use client";

import styles from "../styles/Home.module.css";
import Image from "next/image"; // Ensure you have this import
import Feature from "../components/Feature"; // Assuming Feature is a custom component
import FreeShippingText from './header/FreeShippingText';

const Hero: React.FC = () => {
  return (
    <div>
      <FreeShippingText/>
      <div>
        <Image
          src="/hero-desktop.jpg"
          width={1200}
          height={798}
          className={styles.hero_desk}
          alt="A person meticulously hand-crafting beautiful pottery vessels"
        />
        <Image
          src="/hero-mobile.jpg"
          width={600}
          height={400}
          className={styles.hero_mob}
          alt="A craftsperson meticulously weaving a macrame wall hanging"
        />
      </div>
      <div className={styles.feature_container}>
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  );
};

export default Hero;
