import React from 'react';
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ViewList from "./pages/ViewList";
import ViewControl from "./pages/ViewControl";
import ViewCheckout from "./pages/ViewCheckout";
import ViewCreateList from "./pages/ViewCreateList";
import Loading from "./pages/Loading";
import './App.css';

class App extends React.Component {
  state={

  }


  componentDidMount(){
    this.searchAllListNames();
    this.searchAllitemNames();
  }
  // Finds all the available items and puts them in the state
  searchAllitemNames=event=>{
    axios.get("/api/items/").then( res=>{
      this.setState({items : res.data[0].Availableitems}, ()=>{
        // console.log(this.state);
      } )
    }
      // Set state with results
    ).catch(err => console.error(err));
}

    // Finds all the list names and sets them in the state
   searchAllListNames=event=>{
    axios.get("/api/lists/").then( res=>{
      this.setState({lists : res.data}, ()=>{
        // console.log(this.state);
      } )
    }
      // Set state with results
    ).catch(err => console.error(err));
}

   // function  thats gets the name of the list the user clicked on and passes it into the state of the app.
    // Finds all the buttons that have the class .topBtns and removes the disabled attribute.
    handleListSelect=event=>{
      // console.log(this.state);
      let listTarget=event.target.textContent;
      console.log("listTarget: ", listTarget);
      this.setState({selectedList:listTarget}, ()=>{
          document.querySelectorAll('.topBtns').forEach(btn => {
              btn.classList.remove('disabled')
              })
          }
      );
  }



  render(){
    return (

      <Router>
      <div className="App">
      
        <Switch>
          <Route exact path="/" component={Loading} />
          <Route exact path="/Control" render={props => <ViewControl  handleListSelect={this.handleListSelect}  searchAllListNames={this.searchAllListNames} lists={this.state.lists}/>} />
          <Route exact path="/Checkout" component={ViewCheckout}/>
          <Route exact path="/CreateList" render ={props => <ViewCreateList searchAllitemNames={this.searchAllitemNames}  items={this.state.items}/>}/>
          <Route exact path="/lists/:id" render ={props => <ViewList currentlList={this.state.selectedList} listName={this.state.listName}/>}/>
        </Switch>
      </div>
    </Router>
  
    );
  }


}

export default App;
