import React, { useState, useContext } from 'react';
import "./itemdetail.css"
import { CartContext, } from '../../context/CartContext';

function ItemDetail({ data }) {
    //Var
    const { addToCart, cartItems, setCartItems } = useContext(CartContext)
    const [selectedTalle, setSelectedTalle] = useState('');
    const [selectedCantidad, setSelectedCantidad] = useState(0);
    console.log("los productos del changuito son:", cartItems);

    //Functions

    //Funcion para el boton de agregar al carrito
    const handleAddToCart = () => {
        //creo un objeto de carrito
        const newItem = {
            nombre: data.nombre,
            talle: selectedTalle,
            cantidad: selectedCantidad,
            img: data.img,
        };
        //Busco si el item ya se encuentra en el carrito
        const existingItem = cartItems.find(
            (item) => item.nombre === newItem.nombre && item.talle === newItem.talle
        );
        //si se encuentra en el carrito:
        if (existingItem) {
            const totalQuantity = existingItem.cantidad + newItem.cantidad;
            console.log("selectedTalle:", selectedTalle,typeof(selectedTalle));
            console.log("data.stock.talle:", typeof(data.stock[0].talle));
            const stockItem = data.stock.find((item) => item.talle === selectedTalle);
            console.log("stockItem:",stockItem);
            //verifica que la cantidad total a comprar sea menor o igual al stock disponible
            if (totalQuantity <= stockItem.cantidad) {
                //como cartItems es un state, solo debe modificarse por medio de su funcion set, por lo que hay que crear un nuevo objeto y pasarlo como parametro a setCartItems
                const updatedItems = cartItems.map((item) => {
                    if (item.nombre === newItem.nombre && item.talle === newItem.talle) {
                        return {
                            ...item,
                            cantidad: totalQuantity,
                        };
                    }
                    return item;
                });
                setCartItems(updatedItems);
            }
            else
                console.log("Se supero la cantidad del stock");
        } 
        //si no se encuentra en el carrito, lo agrega
        else {
            addToCart(newItem);
        }



    }

    const handleTalleChange = (e) => {
        setSelectedTalle(parseInt(e.target.value));
        setSelectedCantidad(0);
    };

    const handleCantidadChange = (e) => {
        setSelectedCantidad(parseInt(e.target.value));
    };

    const renderTallesOptions = () => {
        return data.stock.map((stockItem) => (
            <option key={stockItem.talle} value={stockItem.talle}>
                {stockItem.talle}
            </option>
        ));
    };

    const renderCantidadesOptions = () => {
        const selectedStockItem = data.stock.find(
            (stockItem) => stockItem.talle == selectedTalle
        );
        if (selectedStockItem) {
            const options = [];
            for (let i = 0; i <= selectedStockItem.cantidad; i++) {
                options.push(
                    <option key={i} value={i}>
                        {i}
                    </option>
                );
            }
            return options;
        }
        return null;
    };
    const isButtonDisabled = !selectedTalle || selectedCantidad === 0;
    return (
        <div className='cardDetailContainer'>
            <div className="cardDetailL card" style={{ width: '20rem' }}>
                <img src={data.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">
                        <strong>{data.nombre.charAt(0).toUpperCase() + data.nombre.slice(1)}</strong>
                    </h4>
                    <div className="shopMenu">
                        <button disabled={isButtonDisabled} onClick={handleAddToCart} id="producto-${producto.id}" data-id="${producto.id}" className="btn btn-primary btnAdd">Añadir <i className="fa-solid fa-cart-plus"></i> </button>
                        <div className="menues">
                            <div>
                                <label className='talleLabel' htmlFor="talle">Talle:</label>
                                <select id="talle" value={selectedTalle} onChange={handleTalleChange}>
                                    <option value="">Talle</option>
                                    {renderTallesOptions()}
                                </select>
                            </div>
                            <div>
                                <label className='cantidadLabel' htmlFor="cantidad">Cantidad:</label>
                                <select id="cantidad" value={selectedCantidad} onChange={handleCantidadChange} disabled={!selectedTalle}>
                                    <option value="">Cantidad</option>
                                    {renderCantidadesOptions()}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='cardDetailR card'>
                <div className="card-body">
                    <p className="card-text ml8px">
                        <strong>ID: #</strong> {data.id}<br />
                        <strong>Marca:</strong> {data.marca} <br />
                        <strong>Precio:</strong> ${data.precio}<br />
                        <strong>Descripcion:</strong> {data.descripcion}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail