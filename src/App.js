
import React from "react";
    import './App.css';
    import Navbar from "../src/components/Navbar";
    import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
    import Home from '../src/screens/Home';
    import About from '../src/screens/about';
    import Contact from '../src/screens/contact';
    import SignUp from '../src/screens/signup';
    import SignIn from '../src/screens/signin';


    
    
    function App() {
      return (
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </Router>
      );
    }
    
    export default App;
  
