import { formatDate } from "../../helpers/formatDate";
import styles from './style.module.css';
const Header = () => {
    return React.createElement("header", { className: styles.header },
        React.createElement("h1", { className: styles.title }, "NEWS REACTIFY"),
        React.createElement("p", { className: styles.date }, formatDate(new Date())));
};
export default Header;
