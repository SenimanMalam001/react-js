import React from 'react';
import { Redirect } from 'react-router-dom'

const Logout = (props) => {
  localStorage.removeItem('token')
  localStorage.removeItem('role')
  return window.location = '/'
}

export default Logout
