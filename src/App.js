
import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from '../src/Pages/Login/Registration/Register'
import AuthProvider from '../src/Components/Context/AuthProvider'
import PrivateRoute from '../src/Components/PrivateRoute/PrivateRoute'
import Login from './Pages/Login/Login/Login';
import AddProducts from './Pages/Admin/AddProducts/AddProducts';
import MakeAdmin from './Pages/Admin/MakeAdmin/MakeAdmin'
import Explore from './Pages/Explore/Explore/Explore';
import Purchase from './Pages/Explore/Purchase/Purchase';
import AddReview from './Pages/Dashboard/AddReview/AddReview';
import Reviews from './Pages/Home/Review/Reviews/Reviews'
import Footer from './Pages/Shared/Footer/Footer'
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';


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
            <Route path="/addProducts">
              <AddProducts></AddProducts>
            </Route>

            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <PrivateRoute path="/purchase/:productId">
              <Purchase></Purchase>
            </PrivateRoute>

            <Route path="/addReview">
              <AddReview></AddReview>
            </Route>

            <Route path="/makeAdmin">
              <MakeAdmin></MakeAdmin>
            </Route>

            <Route path="/reviews">
              <Reviews></Reviews>
            </Route>

            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
          </Switch>
          
        </Router>



      </AuthProvider>
    </div>
  );
}

export default App;
