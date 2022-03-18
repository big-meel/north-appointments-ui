import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const AppointmentForm = ({user}) => {
  const [date, setDate] = useState('')
  const [description, setDesc] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    let appointment = {
      date: date,
      description: description,
      user_id: user.id
    }

    setIsLoading(true)

    axios.post(`http://localhost:3001/api/appointments`, {appointment})
    .then(response => {
      console.log(response)
      setIsLoading(false)
      history.push('/') // Change to Appointments
    })
  }

  return ( 
    <div className="form">
      <h2>Book New Appointment</h2>
      <form onSubmit={handleSubmit}>
        <label>Date</label>
        <input
          type="date" 
          name="date"
          min={new Date()}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <label>Add more info</label>
        <textarea
          required
          value={description}
          onChange={(e) => setDesc(e.target.value)}
        />
        {!isLoading && <button>Book Appointment</button>}
        {isLoading && <button disabled>Scheduling...</button>}
      </form>
    </div>
   );
}
 
export default AppointmentForm;