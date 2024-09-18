import styles from './style.module.css';
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import { useFetch } from "../../helpers/hooks/useFetch";
import { getCategories } from "../../api/apiNews";
import Slider from "../Slider/Slider";
const NewsFilters = ({ filters, changeFilter }) => {
    const { data: dataCategories } = useFetch(getCategories);
    return (React.createElement("div", { className: styles.filters },
        dataCategories ? (React.createElement(Slider, null,
            React.createElement(Categories, { categories: dataCategories.categories, selectedCategory: filters.category, setSelectedCategory: (category) => changeFilter("category", category) }))) : null,
        React.createElement(Search, { keywords: filters.keywords, setKeywords: (keywords) => changeFilter("keywords", keywords) })));
};
export default NewsFilters;
