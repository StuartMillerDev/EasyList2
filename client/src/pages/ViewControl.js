import React, { Component } from "react";
import List from "../components/List";
import Banner from "../components/Banner";
import Checkout from "../components/Checkout";
import RoundButton from "../components/RoundButton";
import ControlList from "../components/ControlList";
class ViewControl extends Component{
    state={

    }

    componentDidMount() {
        
      }

      handleClick = event =>{
        console.log("CLICKED!");
    }

      render(){
          return(
             <div className="">
                 <RoundButton  text={"Template"} />
                 <ControlList />
              </div>
          );
      }
}

export default ViewControl;