import React from 'react';
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ViewList from "./pages/ViewList";
import ViewControl from "./pages/ViewControl";
import ViewCheckout from "./pages/ViewCheckout";
import Loading from "./pages/Loading";
import './App.css';

class App extends React.Component {
  state={

  }


  componentDidMount(){
    this.searchAllListNames();
  }



   searchAllListNames=event=>{
    axios.get("/api/lists/").then( res=>{
      this.setState({lists : res.data}, ()=>{
        console.log(this.state);
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
          <Route exact path="/lists/:id" component={ViewList} />
        </Switch>
      </div>
    </Router>
  
    );
  }


}

export default App;
