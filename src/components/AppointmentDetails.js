import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const AppointmentDetails = ({user}) => {
  const [appointment, setAppointment] = useState('')
  const { id } = useParams();
  const history = useHistory()
  
  const handleCick = () => {
    axios.delete(`http://north-appointments-api.herokuapp.com//api/appointments/${id}`)
    .then(() => {
      history.push('/')
    })
  }

  useEffect(() => {
    axios.get(`https://north-appointments-api.herokuapp.com/api/appointments/${id}`)
    .then(response => setAppointment(response.data))
  }, [])

  return ( 
    <div className="app-details" >
      <h2>Appointment Details</h2>
      <p>Date: {appointment.date} </p>
      <div>
        { appointment.description }
      </div>

      <button onClick={handleCick}>Cancel Appointment</button>
    </div>
   );
}
 
export default AppointmentDetails;