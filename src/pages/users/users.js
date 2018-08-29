import React, { Component } from 'react'
import { db } from './config/Fire'

class App extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      fullname : '',
      email: '',
      id:'',
      users : []
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidMount() {
   this.getAll();
  }

  getAll(){
    db.settings({
      timestampsInSnapshots: true
    });
    db.collection('users').onSnapshot(collection => {
    const users = collection.docs.map(doc => doc.data())
    this.setState({ users })
    console.log(users);
    })
  }

  delData = {
    db.collection("users").doc().delete().then(function(doc) {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
  }

 

  handleSubmit = e => {
   e.preventDefault()
   db.settings({
      timestampsInSnapshots: true
  });
    const newSuggestionReference = db.collection('users').doc()
    newSuggestionReference.set({ 
                                fullname: this.state.fullname,
                                email: this.state.email, 
                                id: newSuggestionReference.id 
                              })
  }
  
  render() {
    return (
      <div className="App">
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
              type="text" 
              onChange={this.handleChange} 
              name="fullname"
              placeholder="" 
          />
          <input
              type="text" 
              onChange={this.handleChange} 
              name="email"
              placeholder="" 
          />
              <button type="submit">Submit</button>
        </form>

        <ul>
         {
          this.state.users &&
           this.state.users.map((data, index) => 
             <li key={index}>{data.fullname} || dan || {data.email}
               {data.id && <button onClick={ ( ) =>
                    db.collection('users').doc(data.id)
                    .delete( )} >
                    Delete Me
                </button>}
             </li>
            )
          }
        </ul>  
      </div>
    );
  }
}

export default App;
