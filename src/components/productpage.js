import React from 'react';
import {connect} from "react-redux";

function Productpage(props) {
    console.log(props)
    let match=props.match;
    let products=props.products;
    let item=products.find(({title})=>title===match.params.title);
    console.log(item)
    return (
          <>      {item?(<div>
      <h1 style={{color:"white"}}>{item.title}</h1>
         <p style={{color:"white"}}>{item.desc}</p>
         <img src={item.image} alt="img" width="400"/>
         </div>):""}
         </>
    )
}
const mapStatetoProps=(state)=>{
    return{
        products:state.products
    }
}
export default connect(mapStatetoProps)(Productpage)