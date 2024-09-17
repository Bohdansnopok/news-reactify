import styles from './style.module.css';
import LatestNews from "../../components/LatestNews/LatestNews";
import NewsByFilters from "../../components/newsByFilters/newsByFilters";

const Main = () => {
    return <main className={styles.main}>
        <LatestNews/>

        <NewsByFilters/>
    </main>;
};

export default Main;