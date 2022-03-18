import { useState, useEffect } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"

const AppointmentHistory = ({user, filter}) => {
  const [appointments, setAppointments] = useState([])
  const [filteredAppointments, setFiltered] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const history = useHistory()

  const formatDate = (date) => {
    let dateObject = new Date(date)
    return dateObject.toLocaleString()
  }  

  const handleClick = (e) => {
    e.preventDefault()
    history.push('/appointments')
  }
  
  useEffect(() => {
    if (user) {

      axios.get('https://north-appointments-api.herokuapp.com/api/appointments', {params: {patient_id: user.id}})
      .then(response => {
        setAppointments(response.data.appointments)
        setFiltered(filter(appointments)) 
        setIsLoading(false)
        setError('')
      })
      .catch(err => {
        console.log('api errors:', err)
        setError(err.message)
        setIsLoading(true)
      })
    }
  }, [])
  
  return ( 
    <div className="app-list">
      <h2>Past Appointments</h2>
      {isLoading && <p>Loading...</p>}
      {filteredAppointments.map((app) => (
        <div className="app-preview" key={app.id}>
            <h3>{ formatDate(app.date) }</h3>
        </div>
      ))}
      <button onClick={handleClick}>Back</button>
    </div>
   );
}
 
export default AppointmentHistory;