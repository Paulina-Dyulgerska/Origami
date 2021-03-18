import style from './AsideMenu.module.css';
import AsideNavigationItem from './AsideNavigationItem/AsideNavigationItem';

const AsideMenu = () => {
    return (
        <aside className={style.aside}>
                <AsideNavigationItem>Going to 1</AsideNavigationItem>
                <AsideNavigationItem>Going to 2</AsideNavigationItem>
                <AsideNavigationItem>Going to 3</AsideNavigationItem>
                <AsideNavigationItem>Going to 4</AsideNavigationItem>
                <AsideNavigationItem>Going to 5</AsideNavigationItem>
                <AsideNavigationItem>Going to 6</AsideNavigationItem>
                <AsideNavigationItem>Going to 7</AsideNavigationItem>
                <AsideNavigationItem>Going to 8</AsideNavigationItem>
                <AsideNavigationItem>Going to 9</AsideNavigationItem>
                <AsideNavigationItem>Going to 10</AsideNavigationItem>
                <AsideNavigationItem>Going to 11</AsideNavigationItem>
        </aside>
    );
}

export default AsideMenu;