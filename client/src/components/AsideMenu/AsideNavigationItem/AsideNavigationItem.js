import style from './AsideNavigationItem.module.css';

const AsideNavigationItem = (props) => {
    return (
        <li className={style.listItem}><a href="#">{props.children}</a></li>
    );
};

// moga i taka da zapisha gornoto:
// const AsideNavigationItem = ({children}) => {
//     return (
//         <li className={style.listItem}><a href="#">{children}</a></li>
//     );
// };

export default AsideNavigationItem;