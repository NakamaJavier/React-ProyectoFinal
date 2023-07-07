import React, { useContext, useEffect, useState } from 'react';
import "./cartbuy.css"
import { CartContext } from '../../context/CartContext';

function CartBuy() {
    const { cartItems } = useContext(CartContext)
    const [ precioEnvio, setPrecioEnvio ] = useState(0);

    useEffect(() => {
        if (cartItems.length > 0)
            setPrecioEnvio(300)
        else
            setPrecioEnvio(0)
    }, [cartItems])

    const totalPrice = cartItems.reduce((acumulador, item) => {
        acumulador = item.cantidad * item.precio
        return acumulador
    }, 0)
    let sumaCantidades = 0
    if (cartItems.length > 0) {

        sumaCantidades = cartItems.reduce((acumulador, item) => {
            return acumulador + item.cantidad;
        }, 0)
    }

    const handleBtnBuy = () => {

    }

    return (
        <div className="card card-cartBuy">
            <div className='cartBuyTitle'>
                <h2> Resumen de compra</h2>
            </div>
            <div className='buyDetailContainer'>
                <div className='detail1Container'>
                    <h4>Productos ({sumaCantidades})</h4>
                    <h4>$ {totalPrice}</h4>
                </div>
                <div className='detail2Container'>
                    <h4>Envío</h4>
                    <h4>$ {precioEnvio}</h4>
                </div>
                <div className='detail3Container'>
                    <h3>Total</h3>
                    <h3>$ {totalPrice + precioEnvio}</h3>
                </div>
                <button onClick={handleBtnBuy} className="btn btn-primary btnBuy">Añadir </button>
            </div>
        </div>
    )
}

export default CartBuy