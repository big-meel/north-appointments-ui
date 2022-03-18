import axios from 'axios';
import {useEffect, useState} from 'react'
import Login from './Login';
import AppointmentList from './AppointmentList';

const Home = ({user, handleLogin}) => {

  const [appointments, setAppointments] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  // Replace with login

  const filterUpcomingAppointments = (appointments) => {
    let current_date = new Date
    return appointments.filter(app => (new Date(app.date)) > current_date)
  }

  const filterPastAppointments = (appointments) => {
    let current_date = new Date
    return appointments.filter(app => (new Date(app.date)) <= current_date)
  }

  // useEffect(() => {
  //   if (user) {

  //     axios.get('http://localhost:3001/api/appointments', {params: {patient_id: user.id}})
  //     .then(response => {
  //       setAppointments(response.data.appointments) 
  //       setIsLoading(false)
  //       setError(null)
  //     })
  //     .catch(err => {
  //       console.log('api errors:', err)
  //       setError(err.message)
  //       setIsLoading(false)
  //     })
  //   }
  // }, [])

  return ( 
    <div className="home">
      {!user && <Login handleLogin={handleLogin}/>}
      {user && <AppointmentList user={user}/>}
    </div>
   );
}
 
export default Home;