import styles from './style.module.css';
const Pagination = ({ totalPage, handleNextPage, handlePageClick, handlePreviewsPage, currentPage }) => {
    return (React.createElement("div", { className: styles.pagination },
        React.createElement("button", { onClick: handlePreviewsPage, disabled: currentPage <= 1, className: styles.arrow }, '<'),
        React.createElement("div", { className: styles.list }, [...Array(totalPage)].map((_, index) => {
            return (React.createElement("button", { onClick: () => handlePageClick(index + 1), className: styles.pageNumber, disabled: index + 1 === currentPage, key: index }, index + 1));
        })),
        React.createElement("button", { onClick: handleNextPage, disabled: currentPage >= totalPage, className: styles.arrow }, '>')));
};
export default Pagination;
