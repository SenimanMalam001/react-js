import React, { Component } from 'react'
import AlertNotification from '../../components/AlertNotification'
import { db } from '../../firebase/Fire'

class Create extends Component {
  constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this)
      this.state = {
	    fullname: '',
	    email: '',
	    id : '',
	    error: {
	        status: false,
	        message: ''
	    },
	    swalSuccess: false
	  }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

 handleSubmit = e => {
  const newSuggestionReference = db.collection('users').doc()
  newSuggestionReference.set({  
      fullname: this.state.fullname,
      email: this.state.email, 
      id: newSuggestionReference.id
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
    e.preventDefault();
  }

  render() {
    return (
      <div>
         <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item"><a href="/fire">Data Users</a></li>
            <li className="breadcrumb-item active">Create New</li>
        </ol>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
              <label>Fullname</label>
              <input 
              		type="text" 
              		name="fullname" 
              		className="form-control" 
              		onChange={this.handleChange} />
          </div>
          <div className="form-group">
              <label>Email</label>
              <input 
              		type="email" 
              		name="email" 
              		className="form-control" 
              		onChange={this.handleChange} />
          </div>           
          <div className="form-group">
              <input type="submit" value="Simpan" className="btn btn-primary"/>
          </div>
        </form>
         <AlertNotification
                  type="create"
                  status={this.state.swalSuccess}
         />
      </div>
    )
  }
}

export default Create;
