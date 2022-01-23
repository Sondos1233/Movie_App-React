
import './App.css';
import Navbar from "./Component/navbar/nav";
import Movies from './Component/navbar/Movies/Movie';
import Moviedetails from './Component/navbar/Movies/Moviedetails';
import Form from './Component/Register/form';
import Fav from './Component/Fav/Fav';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
 
  return (
    
    <>
      <Router>

      <Navbar />
      
        <Switch>
        <Route path="/register" exact component={Form}/>
        <Route path="/" exact component={Movies}/>
        <Route path="./movie-details/:id" exact component={Moviedetails}/>
        <Route path="/fav" exact component={Fav}/>
         
        </Switch>

      
      </Router>
    </>
  );
}

export default App;
