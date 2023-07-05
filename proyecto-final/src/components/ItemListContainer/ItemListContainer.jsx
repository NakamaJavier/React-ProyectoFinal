import "./itemlistcontainer.css"
import React, { useContext} from 'react';
import { StockContext,} from '../../context/StockContext';
import Item from "../Item/Item";



function ItemListContainer() {
    const products = useContext(StockContext);
    if(products)
    {
        console.log(products);    
    }

    return (
        <div className="contenedor d-flex justify-content-evenly flex-wrap  gap-3">
        { 
        products&&
            products.map((product)=>(
                <div  key={product.id}>
                    <Item data={product}/>
                </div>
            ))}
        </div>
    )
}

export default ItemListContainer