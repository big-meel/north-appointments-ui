import React from "react";
import { useHistory } from "react-router-dom";

const Logout = ({handleLogout}) => {

  const history = useHistory()

  return ( 
    <div>
      { handleLogout() }
      Logged Out Successfully
      {history.push('/')}
    </div>
   );
}
 
export default Logout;