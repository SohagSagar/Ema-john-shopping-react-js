import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';


const Shop = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className='all-products'>
            <div className="display-product">
                {
                    products.map(product=><Product key={product.id} product={product}></Product>)
                }
            </div>
            <div className="order-container">
                <h4>this is order summary section</h4>
            </div>
        </div>
    );
};

export default Shop;