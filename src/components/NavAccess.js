import React from 'react'
import { Link } from 'react-router-dom'

const NavbarAccess = (props) => {
  const { role, roles, to, label } = props
  let isHas = roles.indexOf(role)
  return (
    <span>
    {
      isHas >= 0 && (<Link to={to} className="nav-link">{ label }</Link>)
    }
    </span>
  )

}

export default NavbarAccess
