import styles from './style.module.css';
const Image = ({ image }) => {
    return (React.createElement("div", { className: styles.wrapper }, image ? React.createElement("img", { src: image, alt: "news", className: styles.image }) : null));
};
export default Image;
