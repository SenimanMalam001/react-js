import React, { Component } from 'react'
import AlertNotification from '../../components/AlertNotification'
import { Link } from 'react-router-dom'
import TableRow from './TableRow'
import { db } from '../../firebase/Fire'

class User extends Component {
  constructor(props) {
      super(props);
      this.state = {
        users: [],
        error: {
          status: false,
          message: ''
      },
      swalSuccess: false
      };
  }

  componentDidMount(){
   db.settings({
      timestampsInSnapshots: true
    });
    db.collection('users').onSnapshot(collection => {
    const users = collection.docs.map(doc => doc.data())
    this.setState({ users })
    })
  }

  search = e => {
    db.settings({
      timestampsInSnapshots: true
    });
    db.collection("users").where("fullname", "==", "elfin sanjaya")
    .onSnapshot(function(querySnapshot) {
        var cities = [];
        querySnapshot.forEach(function(doc) {
            cities.push(doc.data().fullname);
        });
            this.setState({ users : cities})
        console.log("Current cities in CA: ", cities.join(", "));
    });
  }

  tabRow(){
        return this.state.users.map(function(object, index){
            return <TableRow obj={object} key={index} />;            
        });
  }
  
  render() {
    return (
      <div className="container" >
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/">Home</a></li>
          <li className="breadcrumb-item">Data Users</li>
        </ol>
          <Link 
              className="btn btn-primary" 
              to={'/fire/create'} 
              style={{ marginBottom: 20}} >
              <i className="fas fa-plus"></i> Tambah 
          </Link>
          <div className="form-group">
              <input 
                  type="text" 
                  className="form-control"
                  placeholder="Search"
                  onClick={this.search}
              />
          </div>

          <button onClick={this.search}>cari</button>

          <table className="table table-striped">
            <thead>
              <tr align="center">
                <th>Fullname</th>
                <th>Email</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.tabRow()}
            </tbody>
          </table>
          <AlertNotification
                  type="delete"
                  status={this.state.swalSuccess}
          />
      </div>
    );
  }
}

export default User;