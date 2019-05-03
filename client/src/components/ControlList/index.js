import React from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
import RoundButton from "../RoundButton";

class ControlList extends React.Component {
   
    state={
       
    }

   

   handleClick= event=>{
      console.log("CLICKED BUTTON");
      
    }

    handleListSelect=event=>{
        console.log(this.state)
        let listTarget=event.target.textContent;
        this.setState({selectedList:listTarget}, ()=>{
            document.querySelectorAll('.topBtns').forEach(btn => {
                btn.classList.remove('disabled')
            })
        }
    );
        // console.log(listTarget.textContent);
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
                            return <li key={list.listName} className="list-group-item" onClick={this.handleListSelect}>{list.listName}</li>
                        })
                        }
                    </ul>
                </div>
                <div id="controlButtons">
                    {/* <RoundButton className="btn btn-primary rounded-circle"  text="OPEN" >  */}
                    <Link className="btn btn-primary rounded-circle topBtns disabled" to={`/lists/${this.state.selectedList}`}>open</Link>  
                    {/* </RoundButton > */}
                    <RoundButton className="btn btn-primary rounded-circle topBtns disabled" text="EDIT" />
                    <RoundButton className="btn btn-primary rounded-circle topBtns disabled"  text="ADD PEOPLE" />
                    <RoundButton className="btn btn-danger rounded-circle topBtns disabled"  text="DELETE" />
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