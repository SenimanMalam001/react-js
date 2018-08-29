import React, { Component } from 'react'
import AlertNotification from '../../components/AlertNotification'
import { db } from '../../firebase/Fire'

class Edit extends Component {
  constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this)
      this.state = {
	    fullname: '',
	    email: '',
	    id : this.props.match.params.index
	  }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidMount() {
   db.settings({
      timestampsInSnapshots: true
   });
   db.doc(`users/${this.state.id}`).get()
   .then(doc => this.setState({ 
        fullname: doc.data().fullname,
        email: doc.data().email,
  	  })
	 )}
   
  handleSubmit = e => {
  	db.collection("users").doc(`${this.state.id}`).update({
      	fullname: this.state.fullname,
  	    email: this.state.email, 
  	}).then(res => {          
        this.setState({ swalSuccess: true})
        this.props.history.push('/fire')
    }).catch((err) => {
          const message = err.response.data.message
          this.setState({
            error: {
            status: true,
            message: message
          }
        })
      })
    e.preventDefault()
  }

  render() {
    return (
      <div>
          <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item"><a href="/fire">Firebase</a></li>
              <li className="breadcrumb-item active">Edit Users</li>
          </ol>
          <h3>Edit Data Users</h3>  
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
              <label>Fullname</label>
              <input 
              		type="text" 
              		name="fullname"
              		value={this.state.fullname} 
              		className="form-control" 
              		onChange={this.handleChange} />
          </div>
          <div className="form-group">
              <label>Email</label>
              <input 
              		type="email" 
              		name="email" 
              		value={this.state.email}
              		className="form-control" 
              		onChange={this.handleChange} />
          </div>           
          <div className="form-group">
              <input type="submit" value="Simpan" className="btn btn-primary"/>
          </div>
        </form>
         <AlertNotification
                  type="edit"
                  status={this.state.swalSuccess}
          />
      </div>
    )
  }
}

export default Edit