import style from './Header.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import LogoNavigationItem from './NavigationItem/LogoNavigationItem';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className={`${style.navigation} `}>
            <ul>
                <LogoNavigationItem src="./white-origami-bird.png" alt="Logo"></LogoNavigationItem>
                <NavigationItem path="/">Home</NavigationItem>
                <NavigationItem path="/about">About</NavigationItem>
                <NavigationItem path="/contact-us">Contact us</NavigationItem>
                <NavigationItem path="/products">Products</NavigationItem>
                <NavigationItem path="/about/Pesho">Going to Pesho</NavigationItem>
                <NavigationItem path="/about/Gosho">Going to Gosho</NavigationItem>
                <NavigationItem path="/about/Niki">Going to Niki</NavigationItem>
                <NavigationItem path="/about/Vasko">Going to Vasko</NavigationItem>
                <NavigationItem path="/about/Ivan">Going to Ivan</NavigationItem>
                <NavigationItem path="/about/Valery">Going to Valery</NavigationItem>
                <NavigationItem path="/about/Losho">Going to Losho</NavigationItem>
            </ul>
        </nav>
    );
}

export default Header;