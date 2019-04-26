import React, { Component } from "react";
import List from "../components/List"
class ViewList extends Component{
    state={

    }

    componentDidMount() {
        console.log("Hello Console");
      }

      render(){
          return(
            <div className="container">
              
              <List/>
            </div>
          );
      }
}

export default ViewList;