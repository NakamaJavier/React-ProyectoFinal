import "./cartwidget.css"
import { useContext } from 'react';
import { CartContext } from "../../context/CartContext";

function CartWidget() {
    const {cartItems} = useContext(CartContext)
    return (
        <div>
            <i className="fa-sharp fa-solid fa-cart-shopping fa-lg" style={{ color: '#ffffff' }}></i>
            <span className="start-f translate-middle badge rounded-pill bg-danger top-f">
                {cartItems.length === 0 ? 0 : cartItems.length}
            </span>
        </div>
    )
}

export default CartWidget