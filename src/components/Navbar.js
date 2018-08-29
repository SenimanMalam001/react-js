import React, { Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import NavAccess from './NavAccess'
import {
  user,
  siswa,
  newsapi,
  fire
} from '../const/access'

class Navbar extends Component {
  constructor() {
    super()
  }


  render() {
    const token = localStorage.token
    const role = localStorage.role
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">ALL Tugas</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item active">
                <NavAccess
                  to="user"
                  label="User"
                  role={role}
                  roles={user.lihat} />
            </li>
            <li className="nav-item active">
                <NavAccess
                  to="siswa"
                  label="Siswa"
                  role={role}
                  roles={siswa.lihat} />
            </li>
            <li className="nav-item active">
                <NavAccess
                  to="newsapi"
                  label="newsapi"
                  role={role}
                  roles={newsapi.lihat} />
            </li>
            <li className="nav-item active">
                <NavAccess
                  to="fire"
                  label="fire"
                  role={role}
                  roles={fire.lihat} />
            </li>
            {
              !token && (
              <li className="nav-item">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
              )
            }
            {

              token && (
              <li className="nav-item">
                <Link to="/logout" className="nav-link">Logout</Link>
              </li>

              )
            }
          </ul>
        </div>
    </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
  }
}

export default connect(mapStateToProps)(Navbar)
