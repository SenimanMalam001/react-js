import React from 'react';
import axios from '../../axios'
import Alert from '../../components/Alert'
import { Redirect } from 'react-router-dom'
import BreadCrumb from '../../components/BreadCrumb'
import Form from './form'
import AlertSuccess from '../../components/AlertSuccess'

class UserCreate extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      name: '',
      role: '',
      password: '',
      error: {
        status: false,
        message: ''
      },
      swalSuccess: false
    }
  }

  handleChange = (e) => {
    if (e.value) {
      this.setState({role: e.value})
    } else {
      this.setState({[e.target.name]: e.target.value})
    }
  }

  validate = () => {
    const { username, password, role, name} = this.state
    if (!username) {
      this.setState({
        error: {
          status: true,
          message: 'Username is Required'
        }
      })
      return false
    }

    if (!password) {
      this.setState({
        error: {
          status: true,
          message: 'Password is Required'
        }
      })
      return false
    }

    if (!name) {
      this.setState({
        error: {
          status: true,
          message: 'Nama is Required'
        }
      })
      return false
    }

    if (!role) {
      this.setState({
        error: {
          status: true,
          message: 'Role is Required'
        }
      })
      return false
    }
    return true
  }

  handleSubmit = (event) => {
    const { username, password, name, role} = this.state
    const { id } = this.props.match.params
    if (this.validate()) {
      const token = localStorage.token
      const headers = {
        token,
        otoritas: 'edit_user'
      }

      axios.put(`/users/${id}`,{username, password, name, role},{ headers }).then((res) => {
        this.setState({swalSuccess: true})
        this.props.history.push('/user')
      }).catch((err) => {
        console.log(err)
      })
    }
    event.preventDefault()
  }

  getData = () => {
    const { id } = this.props.match.params
    const token = localStorage.token
    const headers = {
      token,
      otoritas: 'get_user'
    }
    axios.get(`/users/${id}`, { headers}).then((res) => {
      const { username, password, name, role } = res.data.data
      this.setState({
        username,
        password,
        name,
        role
      })
    }).catch((err) => {
      console.log(err);
    })
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    const { username , password, name, role,  error} = this.state
    return (
      <div className="container" style={{ marginTop: '20px'}}>

        <div className="col-md-4 offset-md-4">
          <BreadCrumb
            secondText="User"
            thirdText="Edit User"
            secondUrl="/user"
          />
          {
            error.status && <Alert type="danger" text={error.message} />
          }
          <Form
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            username={username}
            password={password}
            name={name}
            role={role}
          />
        </div>
        <AlertSuccess
          type="edit"
          status={this.state.swalSuccess}
        />
      </div>
    )
  }
}

export default UserCreate
