import styles from './style.module.css';
const Search = ({ keywords, setKeywords }) => {
    return (React.createElement("div", { className: styles.search },
        React.createElement("input", { type: "text", value: keywords, onChange: (e) => setKeywords(e.target.value), className: styles.input, placeholder: 'JavaScript' })));
};
export default Search;
