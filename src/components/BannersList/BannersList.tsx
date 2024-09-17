import styles from './style.module.css'
import withSkeleton from "../../helpers/hocs/withSkeleton";
import NewsBanner from "../newsBanner/newsBanner";
import {INews} from "../../interfaces/interfaces";

interface Props {
    banners?: INews[] | null;
}

const BannersList = ({banners}: Props) => {
    return (
        <ul className={styles.banners}>
            {banners?.map(banner => {
                return (
                    <NewsBanner key={banner.id} item={banner}/>
                )
            })}
        </ul>
    )
};

const BannersListWithSkeleton = withSkeleton<Props>(BannersList, 'banner', 10, 'row')

export default BannersListWithSkeleton