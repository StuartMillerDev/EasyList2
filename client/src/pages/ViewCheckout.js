import React, { Component } from "react";
import List from "../components/List";
import { Link } from 'react-router-dom'
import Banner from "../components/Banner";

class ViewCheckout extends Component{
    state={

    }

    componentDidMount() {
        
      }

      render(){
          return(
             <div className="text-center">
                 <Banner listName={"Checkout"}  text={"CHECKOUT"}/>

                 <h3>YOU HAVE CHECKED OUT</h3>

                 <div className="" id="returnToControl"><Link  sytle={{background:"#F26419",color: '#FFF'}} to="/control">RETURN TO CONTROL</Link></div>
                 
              </div>
          );
      }
}

export default ViewCheckout;