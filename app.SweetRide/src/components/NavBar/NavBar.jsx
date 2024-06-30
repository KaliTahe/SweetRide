import CartWidget from '../CartWidget/CartWidget.jsx';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <div className="nav-buttons">
                <button className="nav-button">Stickers y más</button>
                <button className="nav-button">Alfombras y Tuft</button>
                <button className="nav-button">Aromas y Colgantes</button>
            </div>
            <CartWidget />
        </nav>
    );
}

export default NavBar;
