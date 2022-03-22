import React from 'react';
import testImg from '../../images/img.jpg'
import './Product.css'
const Product = (props) => {
    // const {name,seller,ratings,img,price}=props.product;
    // console.log(props.product.id);
    console.log(props.product);
    return (
        <div className='shop-container'>
            <div className="products-container">
                <img src={testImg} alt="" />
                <p>{'k'}</p>
                <p>Price:$</p>
                <div className="other-info">
                    <small>Manufacture: Addidas</small>
                    <small>Rating: 5 stars</small>
                </div>
                <button className='cartBtn'> Add to Cart</button>
            </div>
            
        </div>
    );
};

export default Product;