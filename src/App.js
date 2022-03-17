import React, {useState, useEffect} from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import axios from 'axios';

function App() {
  const [isLoggedIn, setStatus] = useState(false)
  const [user, setUser] = useState({})

  const handleLogin = (data) => {
    setStatus(true)
    setUser(data.user)
    console.log("Logged in Successfully")
    console.log(data.user.firstname)
  }

  const handleLogout = () => {
    setStatus(false)
    setUser({})
    console.log("Logged out Successfully")
  }

  // Use use effect hook to check if user is logged in
  const checkLoginStatus = () => {
    axios.get('http://localhost:3001/api/logged_in')
      .then((response) => (response.data.logged_in) ? handleLogin(response) : handleLogout())
      .catch(error => console.log('api errors:', error))
  }

  useEffect(() => {
    checkLoginStatus()
  }, [])


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
