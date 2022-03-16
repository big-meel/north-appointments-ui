import React, {Component} from "react";
import axios from "axios";
import {Link, Redirect} from 'react-router-dom'

const Logout = ({handleLogout}) => {

  const handleClick = () => {
    // Logout user
    handleLogout()
  } 

  return ( 
    <button onClick={handleClick}>Logout</button>
   );
}
 
export default Logout;