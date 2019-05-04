import React, { Component } from "react";
import { Link } from 'react-router-dom'

class ViewCreateList extends Component{

    state={
        listName:""
    }

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    componentDidMount() {
        // Load items from items collection
        console.log(this.props)
        
      }

      handleChange(event) {
        this.setState({value: event.target.value,
            listName: event.target.value});
          
      }

      handleSubmit(event) {
        event.preventDefault();
        this.props.createNewList();
      }

      handleAddItem(event){
        event.preventDefault();
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
                            return <li key={item.name} className="list-group-item btn-sm" onClick={this.handleAddItem}>{item.name}</li>
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