import { Link } from "react-router-dom";
import React from "react";
import "../../src/style/css/header.css"

function header() {
    return(
        <header>
        <div className="header">
            <Link to="/" className="logo">Special Tea</Link>
                <ul className="container">
                <Link to='/Assort' className="Item1">Ассортимент</Link>
                <Link to='/Cart' className="Item1">Ваша корзина</Link>
                <Link to='/About' className="Item1">О нас</Link>
                </ul>
        </div>
    </header>
    ) 
} 
export default header;