import React from 'react';
import "./card.css";
import {Link} from "react-router-dom";

export default function Card(props) {
  return (
    <div className="card">
      <div className="title">
        <h4> {props.title} </h4>
   
      </div>
      <div className="image">
        <Link to={`/${props.title}`}><img src={props.image} width="250" height="200" alt=""/></Link>
      </div>
      <div className="desc">
        
         <details>
         <summary>Product Description</summary>
        {props.desc}</details>
        
      </div>
      <div className="prices">
        <span className="price">
         ${props.price}
        </span>
        <span className="op">
         ${props.op}
        </span>
      </div>
      <div className="btn"><button onClick={props.addtocart}>Add to Cart</button> </div>
      
    </div>
  )
}
