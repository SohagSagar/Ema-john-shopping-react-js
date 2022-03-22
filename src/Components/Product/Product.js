import React from 'react';
import './Product.css'

const Product = (props) => {
    const {id,name,seller,ratings,img,price}=props.product;
    
    return (
        <div className='shop-container'>
            <div className="products-container">
                <img src={img} alt="" />
                <p>{name.slice(0,30)}</p>
                <p>Price:${price}</p>

                <div className="other-info">
                    <small>Manufacture: {seller}</small>
                    <small>Rating: {ratings} stars</small>
                </div>
                <button onClick={()=>props.addToCart(props.product)} className='cartBtn'> Add to Cart</button>
            </div>
            
        </div>
    );
};

export default Product;