import styles from './style.module.css';
import withSkeleton from "../../helpers/hocs/withSkeleton";
import NewsBanner from "../newsBanner/newsBanner";
const BannersList = ({ banners }) => {
    return (React.createElement("ul", { className: styles.banners }, banners === null || banners === void 0 ? void 0 : banners.map(banner => {
        return (React.createElement(NewsBanner, { key: banner.id, item: banner }));
    })));
};
const BannersListWithSkeleton = withSkeleton(BannersList, 'banner', 10, 'row');
export default BannersListWithSkeleton;
