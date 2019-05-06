import React from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
import RoundButton from "../RoundButton";

class ControlList extends React.Component {
   
    state={
       
    }

   

   handleClick= event=>{
    //   console.log("CLICKED BUTTON");
      
    }

    // function  thats gets the name of the list the user clicked on and passes it into the state of the app.
    // Finds all the buttons that have the class .topBtns and removes the disabled attribute.
    handleListSelect=event=>{
        // console.log(this.state);
        let listTarget=event.target.textContent;
        this.setState({selectedList:listTarget}, ()=>{
            document.querySelectorAll('.topBtns').forEach(btn => {
                btn.classList.remove('disabled')
                })
            }
        );
    }
    
  
    // Function that loads the lists to display on the list selector
    componentDidMount() {
        this.props.searchAllListNames()
  }

  componentDidUpdate() {
    //   console.log(this.props)
  }


  render() {
    return(
        <div className="container text-center">

        <div><Link className="btn btn-block btn-primary btn-lg" style={{backgroundColor:"#86BBD8", marginBottom:"2vh"}} to="/createList">CREATE NEW LIST</Link></div>
       
            <div className="row" id="ListContainer"> 

                
                <div id="currentLists">
                    <ul className="list-group">
                        {
                            this.props.lists && 
                            this.props.lists.map(list=>{
                            return <li key={list.listName} className="list-group-item btn-lg" onClick={this.handleListSelect}>{list.listName}</li>
                        })
                        }
                    </ul>
                </div>
                {/* The buttons that you use to open, edit, add people and delete lists */}
                <div id="controlButtons">
                    <Link className="btn btn-block btn-lg btn-primary topBtns disabled" to={`/lists/${this.state.selectedList}`}>OPEN</Link>  
                    <RoundButton className="btn btn-block btn-primary btn-lg topBtns disabled" text="EDIT" />
                    <RoundButton className="btn btn-block btn-primary btn-lg topBtns disabled"  text="ADD PEOPLE" />
                    <RoundButton className="btn btn-block btn-danger btn-lg topBtns disabled"  text="DELETE" />
                </div>
            </div>    
            <div className="d-flex justify-content-center">
                <div className="d-flex flex-nowrap">
                <RoundButton className="btn btn-info btn-lg accountButtons"  text="Templates" />
                <RoundButton className="btn btn-info btn-lg accountButtons"  text="Add Custom Item" />
                </div>
                
            </div>
            <div className="d-flex justify-content-center ">
                <div className="d-flex flex-nowrap">  
                    <RoundButton className="btn btn-secondary btn-lg accountButtons"  text="LOGOUT" />  
                    <RoundButton className="btn btn-warning btn-lg accountButtons"  text="ACCOUNT" />
                </div>
            </div>
        </div>
    );
}



}

export default ControlList;