import React, { Component } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
class ViewCreateList extends Component{

    state={
        listName:"",
        
    }

    constructor(props) {
        super(props);
        this.state = {value: '', addItems:[]};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleItemAdd = this.handleItemAdd.bind(this);
      }

      style={
        checkout:{
            background:"#F26419",
            border:15,
            borderColor:'ffffff',
            borderWidth:4,
            color:"white",
            fontWeight: 'bold',
        }
    }

    // Generates a new list and sends to the database
    createNewList(event){
        axios.post("/api/lists", {listName:this.state.listName,listItems: this.state.addItems}).then(res =>{
          this.setState({lists:res.data},()=>{
            console.log("RES DATA on submit: ",res.data);
          })
        }).catch(err=>console.error(err));
      }

    componentDidMount() {
        
        console.log("Props in ViewCreateList: ",this.props)
        
      }
        // Captures the name the user types 
      handleChange(event) {
        this.setState({value: event.target.value,
            listName: event.target.value});
          
      }
        //   Creates a new list
      handleSubmit(event) {
        event.preventDefault();
        this.createNewList();
      }
        //   Function to add a new item to the new list
        handleItemAdd(event){
        event.preventDefault();
        let selectedItem =event.target.textContent;
        let objItem=this.handleFindItem(selectedItem);
        this.state.addItems.push(objItem); 
        console.log("Items after adding to the array", this.state);
      }

      handleFindItem(selectedItem){
          console.log("FIND ITEM: ",selectedItem);
          axios.get(`/api/items/:${selectedItem}`).then(res=>{
            console.log( res.data);
          }).catch(err=>console.error(err));
      }

      render(){
       
          return(
                <div>
               

                    <div className="Jumbotron">
                        <h2>Create a new list from available items</h2>
                    </div>
                    <div className="form-group">
                        <form onSubmit={this.handleSubmit}>
                        <label>
                        List Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <ul className="list-group">
                        {
                            this.props.items && 
                            this.props.items.map(item=>{
                            return <li key={item.name} className="list-group-item btn-sm" onClick={this.handleItemAdd}>{item.name}</li>
                        })
                        }
                        </ul>
                        <input className="form-control" type="submit" value="Submit" onClick={this.handleSubmit}/>
                    </form>
                    </div>
                    <div ><Link  style={this.style.checkout} to="/control">RETURN TO CONTROL</Link></div>

                </div>
          );
      }
}

export default ViewCreateList;