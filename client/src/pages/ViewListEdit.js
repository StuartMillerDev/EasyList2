import React, { Component } from "react";
import List from "../components/List";
import { Link } from 'react-router-dom'
import Banner from "../components/Banner";
import ListItem from "../components/ListItem";
import RoundButton from "../components/RoundButton";


class ViewListEdit extends Component{
    state={

    }
    componentDidMount() {
        
    }

    render(){
        return(
            <div>
            <Banner listName={this.props.currentList}/>
            <div className="container fluid">
              
                {this.state.items && this.state.items.map((item, i) => (
                <ListItem
                    key={i}
                    text={item.name}
                    
                    
                />
                )
                
                
                )}
            
            </div>
            <Link className="btn  btn-block btn-primary" to="/Control">Return To Control</Link>
            
            </div>
        );
    }
}

export default ViewListEdit;