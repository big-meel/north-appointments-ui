import axios from 'axios';
import {useEffect, useState} from 'react'
import AppointmentList from './AppointmentList';

const Home = () => {

  const [appointments, setAppointments] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  // Replace with login
  const [user, setUser] = useState({id: 14, name: "Jameel"})

  const filterUpcomingAppointments = (appointments) => {
    let current_date = new Date
    return appointments.filter(app => (new Date(app.date)) > current_date)
  }

  const filterPastAppointments = (appointments) => {
    let current_date = new Date
    return appointments.filter(app => (new Date(app.date)) <= current_date)
  }

  useEffect(() => {
    axios.get('http://localhost:3001/api/appointments', {params: {patient_id: user.id}})
    .then(response => {
      setAppointments(response.data.appointments) 
      setIsLoading(false)
      setError(null)
    })
    .catch(err => {
      console.log('api errors:', err)
      setError(err.message)
      setIsLoading(false)
    })
  }, [])

  return ( 
    <div className="home">
      { error && <div> {error} </div>}
      {isLoading && <div>Loading....</div>}
      {/* Upcoming Appointments */}
      {appointments && <AppointmentList appointments={appointments} filter={filterUpcomingAppointments} user={user} timing={"Upcoming"}/>}
      {/* Past Appointments */}
      {appointments && <AppointmentList appointments={appointments} filter={filterPastAppointments} user={user} timing={"Past"}/>}
    </div>
   );
}
 
export default Home;