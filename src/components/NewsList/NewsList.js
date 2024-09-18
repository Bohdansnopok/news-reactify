import styles from './style.module.css';
import NewsItem from "../Newsitem/NewsItem";
import withSkeleton from "../../helpers/hocs/withSkeleton";
const NewsList = ({ news }) => {
    return (React.createElement("ul", { className: styles.list }, news === null || news === void 0 ? void 0 : news.map(item => (React.createElement(NewsItem, { key: item.id, item: item })))));
};
const NewsListWithSkeleton = withSkeleton(NewsList, 'item', 10);
export default NewsListWithSkeleton;
