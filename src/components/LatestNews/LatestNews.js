import styles from './style.module.css';
import BannersList from "../BannersList/BannersList";
import { useFetch } from "../../helpers/hooks/useFetch";
import { getLatestNews } from "../../api/apiNews";
const LatestNews = () => {
    const { data, isLoading } = useFetch(getLatestNews);
    return (React.createElement("section", { className: styles.section },
        React.createElement(BannersList, { banners: data && data.news, isLoading: isLoading })));
};
export default LatestNews;
