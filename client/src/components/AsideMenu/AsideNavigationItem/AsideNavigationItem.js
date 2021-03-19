import style from './AsideNavigationItem.module.css';

// const AsideNavigationItem = (props) => {
//     return (
//         <li className={style.listItem}><a href="#">{props.children}</a></li>
//     );
// };

// moga i taka da zapisha gornoto:
const AsideNavigationItem = ({
    id,
    onClickHandler,
    isSelected,
    text,
    children
}) => {
    let classes = [
        style.listItem,
    ]

    if(isSelected){
        classes.push(style.listItemSelected);
    }

    return (
        //tuk onClick e event:
        <li className={classes.join(' ')} onClick={() => onClickHandler(id)}> 
            <a href="#">{children}</a>
        </li>
    );
};

export default AsideNavigationItem;