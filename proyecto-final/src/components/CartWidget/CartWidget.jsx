import "./cartwidget.css"
import { useContext } from 'react';
import { CartContext } from "../../context/CartContext";

function CartWidget() {
    const {cartItems} = useContext(CartContext)

    let sumaCantidades= 0
    if(cartItems.length>0){
    sumaCantidades = cartItems.reduce((acumulador, item) => {
        return acumulador + item.cantidad;
    }, 0)
    
    }
    return (
        <div>
            <i className="fa-sharp fa-solid fa-cart-shopping fa-lg" style={{ color: '#ffffff' }}></i>
            <span className="start-f translate-middle badge rounded-pill bg-danger top-f">
                {sumaCantidades}
            </span>
        </div>
    )
}

export default CartWidget