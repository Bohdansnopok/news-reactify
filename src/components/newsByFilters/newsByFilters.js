import styles from './style.module.css';
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants";
import NewsList from "../NewsList/NewsList";
import NewsFilters from "../newsFilters/NewsFilters";
import { useFilters } from "../../helpers/hooks/useFilters";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { useFetch } from "../../helpers/hooks/useFetch";
import { getNews } from "../../api/apiNews";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper";
const NewsByFilters = () => {
    const { filters, changeFilter } = useFilters({
        page_number: 1,
        page_size: PAGE_SIZE,
        category: null,
        keywords: '',
    });
    const debouncedKeywords = useDebounce(filters.keywords, 1200);
    const { data, isLoading } = useFetch(getNews, Object.assign(Object.assign({}, filters), { keywords: debouncedKeywords }));
    const handleNextPage = () => {
        if (filters.page_number < TOTAL_PAGES) {
            changeFilter('page_number', filters.page_number + 1);
        }
    };
    const handlePreviewsPage = () => {
        if (filters.page_number > 1) {
            changeFilter('page_number', filters.page_number - 1);
        }
    };
    const handlePageClick = (pageNumber) => {
        changeFilter('page_number', pageNumber);
    };
    return (React.createElement("section", { className: styles.section },
        React.createElement(NewsFilters, { changeFilter: changeFilter, filters: filters }),
        React.createElement(PaginationWrapper, { top: true, bottom: true, handleNextPage: handleNextPage, handlePageClick: handlePageClick, handlePreviewsPage: handlePreviewsPage, totalPage: TOTAL_PAGES, currentPage: filters.page_number },
            React.createElement(NewsList, { isLoading: isLoading, news: data === null || data === void 0 ? void 0 : data.news }))));
};
export default NewsByFilters;
