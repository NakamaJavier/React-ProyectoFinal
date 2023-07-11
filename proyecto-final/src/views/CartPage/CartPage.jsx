import './cartpage.css'
import CartBuy from "../../components/CartBuy/CartBuy"
import CartItemContainer from "../../components/CartItemContainer/CartItemContainer"
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext'

function CartPage() {
    const { cartItems } = useContext(CartContext)
    return (
        <div className="cartPageContainer">
            <div className="cartItemContainer">
                <CartItemContainer />
            </div>
            <div className="cartBuyContainer">
                <CartBuy />
            </div>
        </div>
    )
}

export default CartPage