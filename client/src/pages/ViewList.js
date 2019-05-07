import React, { Component } from "react";
import { Link } from 'react-router-dom'
import List from "../components/List";
import Banner from "../components/Banner";
import Checkout from "../components/Checkout";
class ViewList extends Component{
    state={

    }
    style={
        checkout:{
            background:"#F26419",
            border:15,
            borderColor:'ffffff',
            borderWidth:4,
            color:"white",
            fontWeight: 'bold',
        },
        checkoutHover:{
            background:"red"
        }
    }

    componentDidMount() {
        console.log("LIST NAME IN VIEWLIST: ",this.props)
      }

      render(){
          return(
             <div>
              <Banner listName="Store List"/>
              <div className="container fluid">
                <List currentList={this.props.currentList}/>
              </div>
              <Link className="btn  btn-block" style={this.style.checkout} to="/Checkout">CHECKOUT</Link>
              
              </div>
          );
      }
}

export default ViewList;