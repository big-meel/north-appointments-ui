import { useParams } from "react-router-dom";

const AppointmentDetails = () => {
  const { id } = useParams();
  

  return ( 
    <div className="app-details">
      <h2>Appointment Details</h2>
    </div>
   );
}
 
export default AppointmentDetails;