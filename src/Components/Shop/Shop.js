import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Header from '../Header/Header';


const Shop = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    const addToCart=(props)=>{
        console.log(props);
        <Header product={props}></Header>
    }
    return (
        <div className='all-products'>
            <div className="display-product">
                {
                    products.map(product=><Product key={product.id} product={product} addToCart={addToCart}></Product>)
                }
            </div>
            
        </div>
    );
};

export default Shop;