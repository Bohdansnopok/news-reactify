import { formatTimeAgo } from "../../helpers/formateTimeAgo";
import styles from './style.module.css';
const NewsItem = ({ item }) => {
    return (React.createElement("li", { className: styles.item },
        React.createElement("div", { className: styles.wrapper, style: { backgroundImage: `url(${item.image})` } }),
        React.createElement("div", { className: styles.info },
            React.createElement("h3", { className: styles.title }, item.title),
            React.createElement("p", { className: styles.extra },
                formatTimeAgo(item.published),
                " by ",
                item.author))));
};
export default NewsItem;
