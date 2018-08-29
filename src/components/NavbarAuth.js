import React from 'react'

const NavbarAuth = (props) => {
  const { token } = props
  return (
    {
      !token && (
      <li className="nav-item">
        <a className="nav-link" href="#">Login</a>
      </li>
      )
    }
    {
      token && (
      <li className="nav-item">
        <a className="nav-link" href="#">Logout</a>
      </li>

      )
    }
  )

}

export default NavbarAuth
