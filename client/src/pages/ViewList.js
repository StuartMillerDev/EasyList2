import React, { Component } from "react";
import List from "../components/List";
import Banner from "../components/Banner";
import Checkout from "../components/Checkout";
class ViewList extends Component{
    state={

    }

    componentDidMount() {
        
      }

      render(){
          return(
             <div>
              <Banner listName="Store List"/>
              <div className="container fluid">
                <List/>
              </div>
              <Checkout />
              </div>
          );
      }
}

export default ViewList;