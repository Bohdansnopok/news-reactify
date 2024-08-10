import styles from './style.module.css'

const Pagination = ({totalPage, handleNextPage, handlePageClick, handlePreviewsPage, currentPage}) => {
    return (
        <div className={styles.pagination}>
            <button onClick={handlePreviewsPage} disabled={currentPage <= 1} className={styles.arrow}>{'<'}</button>
            <div className={styles.list}>
                {[...Array(totalPage)].map((_, index) => {
                    return (
                        <button onClick={() => handlePageClick(index + 1)} className={styles.pageNumber}
                                disabled={index + 1 === currentPage} key={index}>
                            {index + 1}
                        </button>
                    )
                })}
            </div>
            <button onClick={handleNextPage} disabled={currentPage >= totalPage} className={styles.arrow}>{'>'}</button>
        </div>
    )
};

export default Pagination
