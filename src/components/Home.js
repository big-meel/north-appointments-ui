import {useState} from 'react'
import AppointmentList from './AppointmentList';

const Home = () => {

  const [appointments, setAppointments] = useState([
    { id: 1, date: "2022-03-22" },
    { id: 2, date: "2022-03-25" }
  ])

  const [user, setUser] = useState(
    {id: 1, name: "Jameel"}
  )

  const handleClick = (e) => {
    setUser({id:1 , name: e.target.name})
  }

  return ( 
    <div className="home">
      <AppointmentList appointments={appointments} user={user}/>
      <button onClick={(e) => handleClick(e)} name="Jamz">Change Name</button>
    </div>
   );
}
 
export default Home;