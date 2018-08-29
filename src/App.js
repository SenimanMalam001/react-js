import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import { Switch, Route, } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Logout from './pages/Logout'
import User from './pages/user'
import UserCreate from './pages/user/create'
import UserEdit from './pages/user/edit'
import Siswa from './pages/siswa'
import SiswaCreate from './pages/siswa/create'
import SiswaEdit from './pages/siswa/edit'
import NewsApi from './pages/newsapi/NewsApi'
import DetailNews from './pages/newsapi/DetailNews'
import fire from './firebase/Fire'
import Users from './pages/users'
import UsersCreate from './pages/users/create'
import UsersEdit from './pages/users/edit'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/logout" exact component={Logout} />
          <Route path="/user" exact component={User} />
          <Route path="/user/create" exact component={UserCreate} />
          <Route path="/user/edit/:id" exact component={UserEdit} />
          <Route path="/siswa" exact component={Siswa} />
          <Route path="/siswa/create" exact component={SiswaCreate} />
          <Route path="/siswa/edit/:id" exact component={SiswaEdit} />
          <Route path="/newsapi" exact component={NewsApi} />
          <Route path="/newsapi/:index" exact component={DetailNews} />
          <Route path="/fire" exact component={Users} />
          <Route path="/fire/create" exact component={UsersCreate} />
          <Route path="/fire/edit/:index" exact component={UsersEdit} />
        </Switch>
      </div>
    );
  }
}

export default App;
