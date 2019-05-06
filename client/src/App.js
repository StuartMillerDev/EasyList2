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




  render(){
    return (

      <Router>
      <div className="App">
      
        <Switch>
          <Route exact path="/" component={Loading} />
          <Route exact path="/Control" render={props => <ViewControl  searchAllListNames={this.searchAllListNames} lists={this.state.lists}/>} />
          <Route exact path="/Checkout" component={ViewCheckout}/>
          <Route exact path="/CreateList" render ={props => <ViewCreateList searchAllitemNames={this.searchAllitemNames}  items={this.state.items}/>}/>
          <Route exact path="/lists/:id" render ={props => <ViewList listName={this.state.listName}/>}/>
        </Switch>
      </div>
    </Router>
  
    );
  }


}

export default App;
