import styles from "../styles/Button.module.css";
interface ButtonProps {
    type: string;
    name: string;
}

export default function Button(props: ButtonProps) {
    const { type, name } = props;
    return (
        <button className={ `${styles[type]}` }>{name}</button>
    );
}