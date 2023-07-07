import React, { useContext} from 'react';
import "./cartitem.css"
import { StockContext} from '../../context/StockContext';
import { CartContext } from '../../context/CartContext';

function CartItem({ data }) {
    const subtotal = data.precio * data.cantidad;
    const products = useContext(StockContext);
    const {cartItems, setCartItems, removeFromCart, clearCart} = useContext(CartContext)
    let maxQuantity = "-"
    if(products){
        maxQuantity = products.find(item => item.id === data.id).stock.find(stock => stock.talle == data.talle).cantidad
    }
    const handleBtnPlus = () => {
        const updatedItems = cartItems.map((item) => {
            if (item.id == data.id && item.cantidad<maxQuantity) {
                return {
                    ...item,
                    cantidad: item.cantidad+1,
                };
            }
            return item;
        });
        setCartItems(updatedItems);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    };

    const handleBtnMinus = () => {
        const updatedItems = cartItems.map((item) => {
            if (item.id == data.id && data.cantidad>1) {
                return {
                    ...item,
                    cantidad: item.cantidad-1,
                };
            }
            return item;
        });
        setCartItems(updatedItems);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    };

    const handleBtnEraseItem = () => {
        removeFromCart(data.id)
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

    const handleBtnClearCart = () => {
        clearCart()
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
    return (
        <div className="card card-cart">
                <div className="product-info">
                    <div className='ordenPrimero'>
                        <img src={data.img} className="product-image" alt="Product" />
                    </div>
                    <div className='ordenSegundo'>
                        <h2 className="product-name">{data.nombre}</h2>
                        <button onClick={handleBtnEraseItem} className="btn-erase">Eliminar</button>
                    </div>
                    <div className='ordenTercero'>
                        <div className="quantity-container">
                            <div className='quantity-actual'>
                                <button onClick={handleBtnMinus} className="quantity-btn btn-minus">-</button>
                                <input type="number" className="quantity-input" value={data.cantidad} readOnly />
                                <button onClick={handleBtnPlus} className="quantity-btn btn-plus">+</button>
                            </div>
                            <div className='quantity-maximun'>
                                <span>({maxQuantity} disponibles)</span>
                            </div>
                        </div>
                    </div>
                    <div className='ordenCuarto'>
                        <div className="price-container">
                            <div className="unit-price">
                                <strong>Precio:</strong> ${data.precio}
                            </div>
                            <div className="subtotal">
                                <strong>Subtotal:</strong> ${subtotal}
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    );
}

export default CartItem;