import Image from "next/image";
import styles from "./feature.module.css";


export default function Feature() {
    return (
        <div className={ styles.container }>
            <Image
                src="/feature_placeholder.webp"
                width={574}
                height={751}
                className={ styles.img}
                alt="A site feature">
            </Image>
            <h2>Feature --&gt;</h2>
        </div>
    )
}