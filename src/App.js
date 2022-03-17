// import React, { useEffect, useState, Component } from 'react';
// import Appointments from './components/Appointments';
// import axios from 'axios'
// import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import Logout from './components/Logout';
// class App extends Component {
  
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoggedIn: false,
//       user: {}
//     }
//   }

//   handleLogin = (data) => {
//     this.setState({
//       isLoggedIn: true,
//       user: data.user
//     })
//     console.log("Logged In")
//   }

//   handleLogout = () => {
//     this.setState({
//       isLoggedIn: false,
//       user: {}
//     })
//   }

//   // Send request to logged in route to check if user is logged in
//   loginStatus = () => {
//     axios.get('http://localhost:3001/api/logged_in')
//       .then(response => (response.data.logged_in) ? this.handleLogin(response) : this.handleLogout() )
//       .catch(error => console.log('api errors:', error))
//   }
  
//   componentDidMount() {
//     this.loginStatus()
//   }


//   render() {
//     return (
//       <div className='App'>
//           {/* <Navbar /> */}
//         <BrowserRouter>
//           <Switch>
//             <Route exact path="/"><Home isLoggedIn={this.state.isLoggedIn}/></Route>
//             <Route exact path="/logout"><Logout handleLogout={this.handleLogout}/></Route>
//             <Route exact path="/login">{this.state.isLoggedIn ? <Redirect to="/" /> : <Login handleLogin={this.handleLogin} history={this.props.history} />}</Route>
//             <Route exact path="/signup">{this.state.isLoggedIn ? <Redirect to="/" /> : <Signup handleLogin={this.handleLogin} history={this.props.history} />} </Route>
//           </Switch>

//         </BrowserRouter>
//       </div>
//     )
//   }
// }

import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {

  return (
    <div className='App'>
      <Navbar />
      <div className='content'>
        <Home />
      </div>
    </div>
  )
}


export default App;
