import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ViewList from "./pages/ViewList";
import ViewControl from "./pages/ViewControl";
import ViewCheckout from "./pages/ViewCheckout";
import Loading from "./pages/Loading";
import './App.css';

function App() {
  return (

    <Router>
    <div className="App">
    
      <Switch>
        <Route exact path="/" component={Loading} />
        <Route exact path="/Control" component={ViewControl} />
        <Route exact path="/Checkout" component={ViewCheckout}/>
        <Route exact path="/lists/:id" component={ViewList} />
      </Switch>
    </div>
  </Router>

  );

}

export default App;
