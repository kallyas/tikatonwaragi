
import React from "react";
    import './App.css';
    // import Navbar from "../src/components/Navbar";
    import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
    import Home from './screens/Home';
    import About from './screens/about';
    import Contact from './screens/contact';
    import SignUp from './screens/signup';
    import SignIn from './screens/signin';
    import Material from './screens/Material'
    import Admin from "./screens/adminScreen/administrator2"
    import AddMaterial from "./components/material/AddMaterial";
    import ListMaterial from "./components/material/ListMaterial";
    import AddProduct from "./components/products/addProducts";
    import ListProduct from "./components/products/ListProduct";
    import AddSales from "./components/sales/AddSales";
    import Sales from "./components/sales/saleList";
    import Opareta from "./screens/opera"
    // import components
    
    import Dashboard from './components/dashboard/Dashboard';
    // import Dashboard1 from '../src/components/dashboard/Dashboard';
    
    function App() {
      return (
        <Router>
          
          <Switch>
          <Route>
            <Route path="/" exact component={Home} />
          
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/material" component={Material}/>
            <Route path="/admin" component={Admin} exact/>
            
            {/* <Route path="/admin/dash1" component={Dashboard}/> */}
            <Route path="/admin/addMaterial" component={AddMaterial}/>
            <Route path="/admin/materialList" component={ListMaterial}/>
            <Route path="/admin/addProducts" component={AddProduct}/>
            <Route path="/admin/productList" component={ListProduct}/>
            <Route path="/admin/productList" component={ListProduct}/>
            <Route path="/admin/sales" component={AddSales}/>
            <Route path="/admin/salesList" component={Sales}/>
          </Route>
           </Switch>
        </Router>
      );
    }
    
    export default App;
  
