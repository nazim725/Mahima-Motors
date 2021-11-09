
import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from '../src/Pages/Login/Registration/Register'
import AuthProvider from '../src/Components/Context/AuthProvider'
import Login from './Pages/Login/Login/Login';


function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
             <Login></Login>
            </Route>
          </Switch>
        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
