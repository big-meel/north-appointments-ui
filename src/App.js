import React, { useEffect, useState, Component } from 'react';
import Appointments from './components/Appointments';
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';

class App extends Component {

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {}
    })
  }

  // Send request to logged in route to check if user is logged in
  loginStatus = () => {
    axios.get('/logged_in', {withCredentials: true})
      .then(response => (response.data.logged_in) ? this.handleLogin(response) : this.handleLogout() )
      .catch(error => console.log('api errors:', error))
  }
  
  componentDidMount() {
    this.loginStatus()
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {}
    }
  }

  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' component={null}/>
            <Route exact path='/login' component={null}/>
            <Route exact path='/signup' component={null}/>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
