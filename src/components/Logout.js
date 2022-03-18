import React, {Component} from "react";
import axios from "axios";
import {Link, Redirect} from 'react-router-dom'

const Logout = ({handleLogout}) => {


  return ( 
    <div>
      { handleLogout() }
      Logged Out Successfully

    </div>
   );
}
 
export default Logout;