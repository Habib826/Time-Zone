import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { createContext, useContext, useState } from "react";
import {BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Book from './Components/Book/Book';
import ReviewForm from './Components/Book/ReviewForm/ReviewForm'
import BookingList from './Components/Book/BookingList/BookingList';
import BookForm from './Components/Book/BookForm/BookForm';
import Login from './Components/Login/Login';
import AddService from './Components/Admin/AddService/AddService';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Success from './Components/Book/Success/Success';
import AddAdmin from './Components/Admin/AddAdmin/AddAdmin';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser]= useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/book">
          <Book/>
        </Route>
        <PrivateRoute path="/bookForm/:id">
          <BookForm/>
        </PrivateRoute>
        <PrivateRoute path="/bookForm">
          <BookForm/>
        </PrivateRoute>
        <Route path="/bookingList">
          <BookingList/>
        </Route>
        <PrivateRoute path="/reviewForm">
          <ReviewForm/>
        </PrivateRoute>
        <Route path="/book:id">
          <ReviewForm/>
        </Route>
        <Route path="/success">
         <Success/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/addService">
          <AddService/>
        </Route>
        <Route path="/admin">
          <AddAdmin/>
        </Route>
      
      </Switch>
      <Footer/>
    </Router>
    </UserContext.Provider>
 
  );
}

export default App;
