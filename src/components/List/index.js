import React,{Component} from "react";

import ListItem from "../ListItem/";
import items from "../../items.js";

const style={
  list: {
    margin: 20,
    background: "#2F4858",
    borderRadius:10,
    borderWidth: 3,
    borderColor: '#fff'
  },
  listItem: {
    margin:15,
    padding: 2,
    background:"#33CCFF",
    color:'white',
    fontWeight: 'bold',
    borderRadius:5,
  },
  listItemAfter: {
    margin:15,
    padding: 2,
    background:"#33CCFF",
    color:'white',
    fontWeight: 'bold',
    borderRadius:5,
    textDecorationLine: 'line-through'
  }

}
class List extends Component{

state={
  items
}


  handleItemCheck = item =>{
    let itemStatus=this.state.item.checked;
    console.log(item);
    this.setState({item:!item.checked});
  }


  render(){

    return (
      <div style={style.list} className="container text-center">
        {this.state.items.map(item =>(
          <ListItem key={item.id} text={item.name} handleClick = {this.handleItemCheck}/>
          // style={this.state.item.checked ? style.listItem : style.listItemAfter}/>
        ))}
      </div>
    );
  }
}

export default List;