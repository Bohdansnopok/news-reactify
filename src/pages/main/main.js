import styles from './style.module.css';
import LatestNews from "../../components/LatestNews/LatestNews";
import NewsByFilters from "../../components/newsByFilters/newsByFilters";
const Main = () => {
    return React.createElement("main", { className: styles.main },
        React.createElement(LatestNews, null),
        React.createElement(NewsByFilters, null));
};
export default Main;
