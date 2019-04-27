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
    background:"#F6AE2D",
    color:'Black',
    fontWeight: 'bold',
    borderRadius:5,
    textDecorationLine: 'line-through'
  }

}
class List extends Component{

state={
  items
}

  componentDidMount(items){
    console.log(this.state.items);
  }
  

// A function to invert the isChecked Property on each listItem
  handleItemCheck = event =>{
    event.preventDefault();
    let targetItem=event.target.id;
    let self=this;
    this.state.items.forEach(function(item){
      let newItems = items;
      if(item.name===targetItem){
        item.isChecked=!item.isChecked;
        let index=newItems.indexOf(item);
        newItems[index]=item;
        console.log(self);
       self.setState({items:newItems}, function(){
        //  call back function to log the state after inverting the isChecked property
         console.log(self.state.items);
       });

      }
    });
  }

// Render method
  render(){
    
    return (
      <div style={style.list} className=" text-center">
      {/* for each item in the items array map each one and pass in props */}
        {this.state.items.map(item =>(
          <ListItem key={item.id} text={item.name} handleClick = {this.handleItemCheck} style={item.isChecked ? style.listItemAfter :style.listItem }/>
          
        ))}
      </div>
    );
  }
}

export default List;