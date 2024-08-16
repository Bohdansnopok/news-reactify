import styles from './style.module.css';
import NewsBanner from "../../components/newsBanner/newsBanner";
import {useEffect, useState} from "react";
import {getCategories, getNews} from "../../api/apiNews";
import NewsList from "../../components/NewsList/NewsList";
import Skeleton from "../../components/Skeleton/Skeleton";
import Pagination from "../../components/Pagination/Pagination";
import Categories from "../../components/Categories/Categories";

const Main = () => {
    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('All')
    const totalPage = 10
    const pageSize = 10
    const fetchNews = async (currentPage) => {
        try {
            setIsLoading(true)
            const response = await getNews({
                page_number: currentPage,
                page_size: pageSize,
                category: selectedCategory === 'All' ? null : selectedCategory
            });
            setNews(response.news);
            setIsLoading(false)
        } catch (error) {
            console.log("Error fetching news:", error);
        }
    };

    const fetchCategories = async () => {
        try {
            const response = await getCategories();
            setCategories(['All', ...response.categories]);
        } catch (error) {
            console.log("Error fetching news:", error);
        }
    };

    useEffect(() => {
        fetchCategories()
    }, []);

    useEffect
    (() => {
        fetchNews(currentPage);
    }, [currentPage, selectedCategory]);

    const handleNextPage = () => {
        if (currentPage < totalPage) {
            setCurrentPage(currentPage + 1)
        }
    }

    const handlePreviewsPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return <main className={styles.main}>
        <Categories categories={categories} selectedCategory={selectedCategory } setSelectedCategory={setSelectedCategory}/>
        {news.length > 0 && !isLoading ? <NewsBanner item={news[0]}/> : <Skeleton type={'banner'} count={1}/>}

        <Pagination handleNextPage={handleNextPage}
                    handlePageClick={handlePageClick}
                    handlePreviewsPage={handlePreviewsPage}
                    totalPage={totalPage}
                    currentPage={currentPage}/>

        {!isLoading ? <NewsList news={news}/> : <Skeleton type={'item'} count={10}/>}
        <Pagination handleNextPage={handleNextPage}
                    handlePageClick={handlePageClick}
                    handlePreviewsPage={handlePreviewsPage}
                    totalPage={totalPage}
                    currentPage={currentPage}/>
    </main>;
};

export default Main;