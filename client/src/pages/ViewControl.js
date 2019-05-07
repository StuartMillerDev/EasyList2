import React, { Component } from "react";
import List from "../components/List";
import Banner from "../components/Banner";
import Checkout from "../components/Checkout";
import RoundButton from "../components/RoundButton";
import ControlList from "../components/ControlList";

class ViewControl extends Component{

    componentDidMount() {
        // console.log(this.props);
      }

      render(){
        //   Grabbing all the lists from the database and passing them down to the child components
          return(
             <div>
                {
                    this.props && <ControlList handleListSelect={this.props.handleListSelect} searchAllListNames={this.props.searchAllListNames} lists={this.props.lists}/>
                }
                 

              </div>
          );
      }
}

export default ViewControl;