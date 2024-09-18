import React from 'react';
import styles from './style.module.css';
import NewsItem from "../Newsitem/NewsItem";
import withSkeleton from "../../helpers/hocs/withSkeleton";
import { INews } from "../../interfaces/interfaces";

interface Props {
    news?: INews[];
}

const NewsList = ({ news }: Props) => {
    return (
        <ul className={styles.list}>
            {news?.map(item => (
                <NewsItem key={item.id} item={item} />
            ))}
        </ul>
    );
};

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 'item', 10);

export default NewsListWithSkeleton;