import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Private Route
import PrivateRoute from "./components/PrivateRoute";

//components
import Login from "./components/Login";
import BubblePage from "./components/BubblePage";

//styles
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <PrivateRoute path="/bubblepage" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
