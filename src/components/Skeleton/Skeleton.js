import styles from "./style.module.css";
const Skeleton = ({ count = 1, type = "banner", direction = 'column' }) => {
    return (count > 1 ? (React.createElement("ul", { className: direction === 'column' ? styles.columnList : styles.rowList }, [...Array(count)].map((_, index) => (React.createElement("li", { key: index, className: type === "banner" ? styles.banner : styles.item }))))) : (React.createElement("li", { className: type === "banner" ? styles.banner : styles.item })));
};
export default Skeleton;
