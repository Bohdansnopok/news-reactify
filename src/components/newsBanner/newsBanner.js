import { formatTimeAgo } from "../../helpers/formateTimeAgo";
import styles from './style.module.css';
import Image from '../image/image';
const NewsBanner = ({ item }) => {
    return React.createElement("div", { className: styles.banner },
        React.createElement(Image, { image: item === null || item === void 0 ? void 0 : item.image }),
        React.createElement("h3", { className: styles.title }, item.title),
        React.createElement("p", { className: styles.extra },
            formatTimeAgo(item.published),
            " by ",
            item.author));
};
export default NewsBanner;
