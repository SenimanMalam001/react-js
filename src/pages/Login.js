import React, { Component} from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Alert from '../components/Alert'
import axios from '../axios'
import { bindActionCreators } from 'redux'
import { setToken } from '../store/actions'


class Login extends Component  {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      error: {
        status: false,
        message: ''
      }
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  validate = () => {
    const { username, password} = this.state
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
    return true
  }

  handleSubmit = (event) => {
    const { username, password} = this.state
    if (this.validate()) {
      axios.post('/users/signin',{username, password}).then((res) => {
        localStorage.setItem("token",res.data.data.token)
        localStorage.setItem("role",res.data.data.role)
        this.props.setToken(res.data.data.token)
        this.props.history.push('/')
      }).catch((err) => {
        console.log(err)
      })
    }
    event.preventDefault()
  }

  render() {
    const { token } = this.props
    const { username , password, error} = this.state
    if (token) {
      return <Redirect to='/' />
    }
    return (
      <div className="container" style={{ marginTop: '20px'}}>
        <div className="col-md-4 offset-md-4">
          {
            error.status && <Alert type="danger" text={error.message} />
          }
          <form onSubmit={ this.handleSubmit}>
            <div className="form-group">
              <label >Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Username"
                name="username"
                value={username}
                onChange={ this.handleChange}
              />
            </div>
            <div className="form-group">
              <label >Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                value={password}
                onChange={ this.handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.token
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({setToken}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)
