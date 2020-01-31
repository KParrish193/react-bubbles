import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
        <div>
            <Link to="/login">Login</Link>
        </div>

        <Route exact path="/login" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <PrivateRoute path="/bubblepage/" component={BubblePage} />
  
      </div>
    </Router>
  );
}

export default App;
