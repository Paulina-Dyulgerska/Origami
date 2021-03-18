import NavigationItem from './NavigationItem/NavigationItem';
import LogoNavigationItem from './NavigationItem/LogoNavigationItem';
import style from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={style.footer}>
            <ul>
                <NavigationItem>Going to 1</NavigationItem>
                <NavigationItem>Going to 2</NavigationItem>
                <NavigationItem>Going to 3</NavigationItem>
                <NavigationItem>Going to 4</NavigationItem>
                <NavigationItem>Going to 5</NavigationItem>
                <NavigationItem>Going to 6</NavigationItem>
                <NavigationItem>Going to 7</NavigationItem>
                <NavigationItem>Going to 8</NavigationItem>
                <NavigationItem>Going to 9</NavigationItem>
                <NavigationItem>Going to 10</NavigationItem>
                <NavigationItem>Going to 11</NavigationItem>
                <LogoNavigationItem src="./blue-origami-bird-flipped.png" alt="Logo"></LogoNavigationItem>
            </ul>
            <p>
                Software University &copy; 2021;
            </p>
        </footer>
    )
}

export default Footer;