import React, { Component } from 'react';
import MenuAppBar from "./components/navbar.jsx"
import Header from './components/header.jsx';
import Card from "./components/card.jsx";
import {connect} from "react-redux";
import MyCart from './components/myCart.jsx';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import ProductPage from "./components/productpage"

 
class App extends Component {
    state={
        myCart:[],
        itemsAdded:0,
        cartClass:"pos hide"
    }
    handleclick=()=>{
        console.log("helleleoe")
    }
    addtocart=(i)=>{
        let item=this.props.products[i];
        console.log(item)
        this.setState({
            myCart:[...this.state.myCart,item],
            itemsAdded:this.state.itemsAdded+1,
            cartClass:"pos show"
        })
        console.log(this.state)
    }
    itemremove=(i)=>{
        let array=this.state.myCart;
        array.splice(i,1);
        this.setState({
            myCart:array,
            itemsAdded:this.state.itemsAdded-1,
        })
    }
    minusquantity=(i)=>{
        let array=this.state.myCart;
        let deleteditem=array.splice(i,1);
        deleteditem[0].quantity--;
        array.splice(i,0,deleteditem[0])
        this.setState({
            myCart:array
        })
    }
    plusquantity=(i)=>{
        let array=this.state.myCart;
        let deleteditem=array.splice(i,1);
        deleteditem[0].quantity++;
        array.splice(i,0,deleteditem[0])
        this.setState({
            myCart:array
        })
    }
    Addclass=()=>{
        this.setState({
            cartClass:"pos show"
        })
    }
    hideclass=()=>{
        this.setState({
            cartClass:"pos hide"
        }) 
    }
    render() {
        
        const {products}=this.props;
        return (
            <Router>
            <div style={{backgroundColor:"black"}}>
                <MenuAppBar itemsAdded={this.state.itemsAdded} Addclass={this.Addclass}/>
                <Header handleclick={this.handleclick}/>
                <h1 style={{textAlign:"center",color:"white"}}>OUR PRODUCTS</h1>
                <Switch>
                <Route exact path="/" render={()=>{
                    return( <div style={{display:"flex",flexWrap:"wrap"}}>
                    {products.map((product,index)=>{
                        return( <Card 
                         key={index}
                         title={product.title }
                         image={product.image}
                         desc={product.desc}
                         price={product.price}
                         op={product.op}
                         addtocart={()=>this.addtocart(index)}   
                    />)
                    })}
                    </div>)
                }}/>
                <Route path="/:title" component={ProductPage}/>
            </Switch>
               <MyCart hideclass={this.hideclass} cartClass={this.state.cartClass} items={this.state.myCart} itemremove={this.itemremove} minus={this.minusquantity} plus={this.plusquantity}/>
            </div>
           
            </Router>
        )
    }
}
const mapStateToProps=(state)=>{
return {products:state.products};
}

export default connect(mapStateToProps)(App);