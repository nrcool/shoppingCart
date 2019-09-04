import React from 'react';
import "./mycart.css";

export default function MyCart(props) {
        const Total=props.items.reduce((acc,item)=>{
            acc=acc+(item.price*item.quantity);
            return acc;
        },0)
        let taxes=(Total/100*2.8).toFixed(2);
        
    return (
        <div className={props.cartClass}>
            <h3 style={{ color: "white", textAlign: "center" }}>Shopping Cart <span className="closebtn" onClick={props.hideclass}>X</span> </h3>
               <div className="Cart" >
                {props.items.map((item, index) => {
                    return ( 
                    
                        <div className="product"key={index}>
                            <div className="IteminCart">
                                <div className="image">
                                    <img src={item.image} width="100" height="100" alt="img" />
                                </div>
                                <div className="content">
                                    <div className="title">
                                        {item.title}
                                    </div>
                                    <div className="price">
                                        ${item.price * item.quantity}
                                        <div className="tax">
                                            tax :2.8%
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="quantity">
                                <button onClick={() => props.minus(index)}>-</button>  {item.quantity}  <button onClick={() => props.plus(index)}>+</button>
                                <button style={{ marginLeft: "5px" }} onClick={() => props.itemremove(index)}>DELETE</button>
                            </div>


                          
                        </div>
           
                 )
             })}
                            <div className="total">
                                <h3>Tax: ${taxes}</h3>
                               <h1> Total  ------------ :  ${Total + Number(taxes)} </h1>
                            </div>
             </div>
              
        </div>
            )
        }
