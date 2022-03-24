import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = (props) => {
    console.log(props);
    return (

        <nav className='nav-container'>
            <img src={logo} alt="" />
            <div className="menu-items">
                <li>Order</li>
                <li>Order Review</li>
                <li>Inventory</li>
                <li>Cart<sup className='cart-added-number'>0</sup></li>
            </div>
        </nav>
    );
};

export default Header;