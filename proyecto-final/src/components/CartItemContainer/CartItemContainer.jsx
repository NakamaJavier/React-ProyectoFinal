import "./cartitemcontainer.css"
import { useContext } from 'react';
import {CartContext} from '../../context/CartContext'
import CartItem from '../../components/CartItem/CartItem'

function CartItemContainer() {
    const {cartItems} = useContext(CartContext)
    return (
        cartItems&&
            cartItems.map((cartItem)=>(
                <div  key={cartItem.id}>
                    <CartItem data={cartItem}/>
                </div>
            ))
    )
}

export default CartItemContainer