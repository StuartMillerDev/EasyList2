import React, { Component } from "react";
import axios from "axios";

import ListItem from "../ListItem";

const style = {
  list: {
    margin: 20,
    background: "#2F4858",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#fff"
  },
  listItem: {
    margin: 15,
    padding: 2,
    background: "#33CCFF",
    color: "white",
    fontWeight: "bold",
    borderRadius: 5
  },
  listItemAfter: {
    margin: 15,
    padding: 2,
    background: "#F6AE2D",
    color: "Black",
    fontWeight: "bold",
    borderRadius: 5,
    textDecorationLine: "line-through"
  }
};

class List extends Component {
  state = {
    items: [],
    listId: null,
    listName:""
  };

  // Collects all the items
  componentDidMount(items) {
    this.getListItems();
    
  }
  // a default loading 
  getListItems = () => {
    console.log("PROPS IN LIST COMPONENT: ",this.props);
    axios.get(`/api/lists/Default`)
      .then(results => {
        this.setState({
          items: results.data.listItems,
          listName:results.data.listName,
          listId: results.data._id
        });
        console.log(this.state);
      }
    );
  }
  // updates the database with the current list items 
  updateList = (items) => {
    return axios.put(`/api/lists/Default`, {
      listId: this.state.listId,
      listItems: items
    });
  }

  // A function to invert the isChecked Property on each listItem
  handleItemCheck = event => {
    event.preventDefault();
    
    let targetItem = event.target.id;
    const updatedItems = [...this.state.items];
    const targetIdx = updatedItems.findIndex(item => item.name === targetItem);
    updatedItems[targetIdx].isChecked = !updatedItems[targetIdx].isChecked;
    // Optimistic rerender below
    this.setState({ items: updatedItems });
    // update the list in the database
    this.updateList(updatedItems)
      .then(this.getListItems);
  };

  

  // Render method
  render() {
    return (
      <div style={style.list} className="text-center">
        {/* for each item in the items array map each one and pass in props */}
        {this.state.items && this.state.items.map((item, i) => (
          <ListItem
            key={i}
            text={item.name}
            handleClick={this.handleItemCheck}
            style={item.isChecked ? style.listItemAfter : style.listItem}
          />
        ))}
      </div>
    );
  }
}

export default List;
