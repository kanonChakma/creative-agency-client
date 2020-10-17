import React from 'react';
import HeaderNavbar from '../HeaderNavbar/HeaderNavbar';
import Mainheader from '../Mainheader/Mainheader';
import './Header.css'
const Header = () => {
    return (
        <div className="head-container mb-5">
           <HeaderNavbar></HeaderNavbar>
           <Mainheader></Mainheader> 
        </div>
    );
};
export default Header;