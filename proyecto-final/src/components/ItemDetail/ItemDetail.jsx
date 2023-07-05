import React, { useState } from 'react';
import "./itemdetail.css"

function ItemDetail({ data }) {
    const [selectedTalle, setSelectedTalle] = useState('');
    const [selectedCantidad, setSelectedCantidad] = useState(0);
    const handleTalleChange = (e) => {
        setSelectedTalle(e.target.value);
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
    return (
        <div className='cardDetailContainer'>
            <div className="cardDetailL card" style={{ width: '20rem' }}>
                <img src={data.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">
                        <strong>{data.nombre.charAt(0).toUpperCase() + data.nombre.slice(1)}</strong>
                    </h4>
                    <div className="shopMenu">
                        <button id="producto-${producto.id}" data-id="${producto.id}" className="btn btn-primary btnAdd">Añadir <i className="fa-solid fa-cart-plus"></i> </button>
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