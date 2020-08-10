import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddUserForm from './AddUserForm';
import AllUsers from './AllUsers';
import Users from './Users';


class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        users : [
          {publisher: "peggy oppong", author: "peggy oppong", genre: "romance", title: "end of the tunnel"},
          {publisher: "eric asante",  author: "peggy oppong",genre: "memories", title: "sonship"},
          {publisher: "peggy oppong", author: "peggy oppong",genre: "life lessons", title: "the shark"},
          {publisher: "peggy oppong", author: "peggy oppong",genre: "love", title: "scars of love"},
        ]
      }
    }
    addNewUser = (user) => {
      this.setState({users: [...this.state.users, user]})
    }
    render(){
      return (
        <div className="App">
          <AddUserForm addUser ={this.addNewUser} />
          <AllUsers userInfo={this.state.users} />
        </div>

  
    );
  }
}

export default App;
