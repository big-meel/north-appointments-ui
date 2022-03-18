import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const PatientDetails = ({user, handleLogout}) => {
  const history = useHistory()

  const handleClick = () => {
    window.confirm("Are you sure?")
    axios.delete(`http://localhost:3001/api/patients/${user.id}`)
    .then(() => {
      handleLogout()
      history.push("/")
    })
  }

  return ( 
    <div className="app-details">
      <h2>{user.firstname}'s Profile</h2>
      <div><p>Firstname: {user.firstname}</p></div>
      <div><p>Middlename: {user.middlename}</p></div>
      <div><p>Lastname: {user.lastname}</p></div>
      <div><p>Email Address: {user.email}</p></div>
      <div><p>Country: {user.country}</p></div>
      <div><p>Date Of Birth: {user.date_of_birth}</p></div>
      <div><p>Contact #: {user.contact_number}</p></div>
      <br/><br/>
      <Link to="/patient/edit">Edit Profile</Link>
      <br/><br/>
      <button onClick={handleClick}>Delete Account</button>
    </div>
   );
}
 
export default PatientDetails;