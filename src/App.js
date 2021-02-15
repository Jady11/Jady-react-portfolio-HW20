// import './App.css';
import About from "./components/About"
import Header from "./components/Header"
import Portfolio from "./components/Portfolio"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
   <Router>
     <Header/>
    <Switch>
      <Route exact path="/Portfolio">
        <Portfolio/>

      </Route>
      <Route path="/">
        <About/>
      </Route>
    </Switch>

   </Router>
  );
}

export default App;
