import style from './NavigationItem.module.css';
import { Link, NavLink } from 'react-router-dom';
import CustomLink from '../../CustomLink/CustomLink';

const NavigationItem = (props) => {
    return (
        // <li className={style.listItem}><a href="#">{props.children}</a></li>
        // <Link className={style.listItem} to={props.path}>{props.children}</Link>
        //<Link className={style.listItem} to={props.path || '/'}>
        //    <li className={style.listItem}>
        //        {props.children}
        //    </li>
        //</Link >
        // <li className={style.listItem}>
        //     <Link to={props.path || '/'}>
        //         {props.children}
        //     </Link >
        // </li>

        //the best option is this:
        <CustomLink
            tag='li' // tag name
            to={props.path || '/'} // path
            className={style.listItem} //className
        >
            {props.children}
        </CustomLink>
    );
};

export default NavigationItem;