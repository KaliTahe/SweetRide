import cart from '../../assets/cart.png';
import './CartWidget.css';

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <img src={cart} alt="cart-widget" className="cart-image" />
            0
        </div>
    );
}

export default CartWidget;

