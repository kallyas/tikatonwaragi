
import React from "react";
    import './App.css';
    // import Navbar from "../src/components/Navbar";
    import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
    import Home from '../src/screens/Home';
    import About from '../src/screens/about';
    import Contact from '../src/screens/contact';
    import SignUp from '../src/screens/signup';
    import SignIn from '../src/screens/signin';
    import Material from '../src/screens/Material'
    import Admin from "./screens/adminScreen/administrator2"
    import AddMaterial from "./screens/adminScreen/AddMaterial";
    // import components
    
    import Dashboard from '../src/components/dashboard/Dashboard';
    import Dashboard1 from '../src/components/dashboard/Dashboard';
    

    function App() {
      return (
        <Router>
          
          <Switch>
          <Route>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/adminstrator" component={Admin}/>
            <Route path="/material" component={Material}/>
            
            
          
            <Route path="/admin" component={Admin} exact/>
            
            <Route path="/admin/dash1" component={Dashboard1}/>
            <Route path="/admin/addMaterial" component={AddMaterial}/>
          </Route>


          </Switch>
        </Router>
      );
    }
    
    export default App;
  
