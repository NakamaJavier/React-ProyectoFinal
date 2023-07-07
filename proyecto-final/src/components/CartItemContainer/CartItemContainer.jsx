import "./cartitemcontainer.css"
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext'
import CartItem from '../../components/CartItem/CartItem'

function CartItemContainer() {
    const { cartItems, clearCart } = useContext(CartContext)

    const handleBtnCartClear = () => {
        clearCart()
    }
    return (
        cartItems &&
        <div className='CartItemContainer'>
            {cartItems.map((cartItem) => (
                <div key={cartItem.id}>
                    <CartItem data={cartItem} />
                </div>
            ))}
            {cartItems.length > 0 && (
                <button onClick={handleBtnCartClear} className="btn-clear">
                    Vaciar Carrito
                </button>
            )}
        </div>
    )
}

export default CartItemContainer