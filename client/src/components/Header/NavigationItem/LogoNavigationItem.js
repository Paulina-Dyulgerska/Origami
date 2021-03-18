import style from './NavigationItem.module.css';

const LogoNavigationItem = (props) => {
    return (
        <li className={style.listItem}><img src={props.src} alt={props.alt}></img></li>
    );
};

export default LogoNavigationItem;