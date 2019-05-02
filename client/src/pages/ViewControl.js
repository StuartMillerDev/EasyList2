import React, { Component } from "react";
import List from "../components/List";
import Banner from "../components/Banner";
import Checkout from "../components/Checkout";
import RoundButton from "../components/RoundButton";
import ControlList from "../components/ControlList";

class ViewControl extends Component{

    componentDidMount() {
        console.log(this.props);
      }

      render(){
          return(
             <div>
                {
                    this.props && <ControlList searchAllListNames={this.props.searchAllListNames} lists={this.props.lists}/>
                }
                 

              </div>
          );
      }
}

export default ViewControl;