import React, { Component } from "react";
import List from "../components/List";
import { Link } from 'react-router-dom'
import Banner from "../components/Banner";

class ViewEditList extends Component{
    state={

    }
    componentDidMount() {
        
    }

    render(){
        return(
           <div>
            <Banner listName="Edit List"/>
            <div className="container fluid">
              <List />
            </div>
            <Link className="btn  btn-block" style={this.style.checkout} to="/Checkout">CHECKOUT</Link>
            
            </div>
        );
    }
}