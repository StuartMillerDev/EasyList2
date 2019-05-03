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

                 YOU HAVE CHECKED OUT

                 <div className="">RETURN TO CONTROL</div>
                 
              </div>
          );
      }
}

export default ViewCheckout;