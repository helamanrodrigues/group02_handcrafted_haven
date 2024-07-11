import Image from "next/image";
import styles from "../styles/SellerProfile.module.css";
import Button from "./Button";

export default function Profile() {
    return (
        <div className={styles.container}>
        <section className={styles.presentation}>
            <div aria-hidden="true" className={styles.imgContainer}>
                <Image
                src="/images/seller-profile-placeholder.webp"
                width={600}
                height={900}
                className={styles.img}
                alt="A site feature"
                ></Image>
            </div>
            <div aria-hidden="true" className="info">
                <h2>Hi, I'm Name</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <Button type={"filled"} name={"See Products"}></Button>
                <Button type={"border"} name={"About"}></Button>
            </div>
        </section>
        <section className={styles.about}>
            <h2>A bit about me</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </section>
      </div>
      );
}