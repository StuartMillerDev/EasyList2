import React from "react";
import axios from "axios";
import RoundButton from "../RoundButton";

class ControlList extends React.Component {
    style={
        button:{
            
        }
    }

   

   handleClick= event=>{
      console.log("CLICKED BUTTON");
      
    }
    
    componentDidMount() {
        this.props.searchAllListNames()
  }

  componentDidUpdate() {
      console.log(this.props)
  }


  render() {
    return(
        <div className="container text-center">
            <div className="row" id="ListContainer"> 
                <div id="currentLists">
                    <ul className="list-group">
                        {
                            this.props.lists && 
                            this.props.lists.map(list=>{
                            return <li key={list.listName} className="list-group-item">{list.listName}</li>
                        })
                        }
                    </ul>
                </div>
                <div id="controlButtons">
                    <RoundButton className="btn btn-primary rounded-circle"  text="OPEN" onClick={this.handleClick} />
                    <RoundButton className="btn btn-primary rounded-circle"  text="EDIT" />
                    <RoundButton className="btn btn-primary rounded-circle"  text="ADD PEOPLE" />
                    <RoundButton className="btn btn-danger rounded-circle"  text="DELETE" />
                </div>
            </div>    
            <div className="row">
                
                <RoundButton className="btn btn-primary rounded-circle"  text="Templates" />
                <RoundButton className="btn btn-primary rounded-circle"  text="Add Custom Item" />
                <RoundButton className="btn btn-secondary rounded-circle"  text="LOGOUT" />
                <RoundButton className="btn btn-warning rounded-circle"  text="ACCOUNT" />
               
            </div>
        </div>
    );
}



}

export default ControlList;