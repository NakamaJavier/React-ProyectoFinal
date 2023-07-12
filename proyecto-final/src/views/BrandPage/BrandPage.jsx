import './brandpage.css'
import { useEffect, useState, useContext } from "react";
import {useParams} from "react-router-dom"
import { StockContext,} from '../../context/StockContext';
import Item from '../../components/Item/Item';

function BrandPage() {
    const products = useContext(StockContext);
    const {brandValue} = useParams()
    return (
        <div className="contenedor d-flex justify-content-evenly flex-wrap  gap-3">
        { 
        products&&
        products.filter(product => product.marca.toLowerCase() == brandValue).map((product)=>(
                <div  key={product.id}>
                    <Item data={product}/>
                </div>
            ))}
        </div>
        
    )
}

export default BrandPage