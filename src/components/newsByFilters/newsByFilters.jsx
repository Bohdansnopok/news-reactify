import styles from './style.module.css'
import {PAGE_SIZE, TOTAL_PAGES} from "../../constants/constants";
import NewsList from "../NewsList/NewsList";
import NewsFilters from "../newsFilters/NewsFilters";
import {useFilters} from "../../helpers/hooks/useFilters";
import {useDebounce} from "../../helpers/hooks/useDebounce";
import {useFetch} from "../../helpers/hooks/useFetch";
import {getNews} from "../../api/apiNews";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper";

const NewsByFilters = () => {
    const {filters, changeFilter} = useFilters({
        page_number: 1,
        page_size: PAGE_SIZE,
        category: null,
        keywords: '',
    })

    const debouncedKeywords = useDebounce(filters.keywords, 1200)

    const {data, isLoading} = useFetch(getNews, {
        ...filters,
        keywords: debouncedKeywords,
    })

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

    return (
        <section className={styles.section}>
            <NewsFilters changeFilter={changeFilter} filters={filters}/>

            <PaginationWrapper
                top
                bottom
                handleNextPage={handleNextPage}
                handlePageClick={handlePageClick}
                handlePreviewsPage={handlePreviewsPage}
                totalPage={TOTAL_PAGES}
                currentPage={filters.page_number}
            >
                <NewsList isLoading={isLoading} news={data?.news}/>
            </PaginationWrapper>
        </section>
    )
};

export default NewsByFilters
