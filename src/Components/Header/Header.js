import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='nav-container'>
            <img src={logo} alt="" />
            <div className="menu-items">
                <li>Order</li>
                <li>Order Review</li>
                <li>Inventory</li>
            </div>
        </nav>
    );
};

export default Header;