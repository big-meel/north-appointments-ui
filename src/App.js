import React, {useState, useEffect} from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AppointmentDetails from './components/AppointmentDetails';
import AppointmentForm from './components/AppointmentForm';
import AppointmentList from './components/AppointmentList';
import PatientDetails from './components/PatientDetails';
import PatientForm from './components/PatientForm'
import AppointmentHistory from './components/AppointmentHistory';

function App() {
  const [user, setUser] = useState('')

  const filterPastAppointments = (appointments) => {
    let current_date = new Date()
    return appointments.filter(app => (new Date(app.date)) <= current_date)
  }
  
  const handleLogin = (data) => {
    const parsedUser = JSON.stringify(data.user)
    setUser(data.user)
    localStorage.setItem("user", parsedUser)
  }
  
  const handleLogout = () => {
    setUser('')
    localStorage.removeItem("user")
    console.log("Logged out Successfully")
  }
  
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user")
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser)
      setUser(foundUser)
    }
  }, [])

  return (
    <Router>
      <div className='App'>
        <Navbar user={user}/>
        <div className='content'>
          <Switch>

            <Route exact path="/">
              <Home user={user} handleLogin={handleLogin} />
            </Route>
            <Route path="/create">
              <AppointmentForm user={user}/>
            </Route>
            <Route path="/history">
              <AppointmentHistory user={user} filter={filterPastAppointments}/>
            </Route>
            <Route exact path="/appointments">
              <AppointmentList user={user}/>
            </Route>
            <Route path="/appointments/:id">
              <AppointmentDetails user={user}/>
            </Route>
            <Route path="/login">
              <Login handleLogin={handleLogin}/>
            </Route>
            <Route path="/logout">
              <Logout handleLogout={handleLogout}/>
            </Route>
            <Route path="/signup">
              <Signup handleLogin={handleLogin}/>
            </Route>
            <Route exact path="/patient">
              <PatientDetails user={user} handleLogout={handleLogout}/>
            </Route>
            <Route path="/patient/edit">
              <PatientForm user={user} handleLogin={handleLogin}/>
            </Route>

          
          </Switch>
        </div>
      </div>
    </Router>
  )
}


export default App;
