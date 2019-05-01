import React, { Component } from "react";
import List from "../components/List";
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
                 
              </div>
          );
      }
}

export default ViewCheckout;