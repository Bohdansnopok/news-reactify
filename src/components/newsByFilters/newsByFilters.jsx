import styles from './style.module.css'
import Pagination from "../Pagination/Pagination";
import {TOTAL_PAGES} from "../../constants/constants";
import NewsList from "../NewsList/NewsList";
import NewsFilters from "../newsFilters/NewsFilters";

const NewsByFilters = ({filters, changeFilter, isLoading, news}) => {
    const handleNextPage = () => {
        if (filters.page_number < TOTAL_PAGES) {
            changeFilter('page_number', filters.page_number + 1)
        }
    }

    const handlePreviewsPage = () => {
        if (filters.page_number > 1) {
            changeFilter('page_number', filters.page_number - 1)
        }
    }

    const handlePageClick = (pageNumber) => {
        changeFilter('page_number', pageNumber)
    }

    return <section className={styles.section}>
        <NewsFilters changeFilter={changeFilter} filters={filters}/>

        <Pagination handleNextPage={handleNextPage}
                    handlePageClick={handlePageClick}
                    handlePreviewsPage={handlePreviewsPage}
                    totalPage={TOTAL_PAGES}
                    currentPage={filters.page_number}/>

        <NewsList isLoading={isLoading} news={news}/>

        <Pagination handleNextPage={handleNextPage}
                    handlePageClick={handlePageClick}
                    handlePreviewsPage={handlePreviewsPage}
                    totalPage={TOTAL_PAGES}
                    currentPage={filters.page_number}/>
    </section>;
};

export default NewsByFilters
