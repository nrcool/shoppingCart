import React from 'react';
import "./header.css";

export default function Header(props) {
    return (
        <div className="header">
            <div className="inner">
            <h1>SHOP</h1>
            <button onClick={props.handleclick}>Show Products</button>
             </div>
        
        </div>
    )
}
