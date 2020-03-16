import React, { Component } from 'react';
import axios from 'axios';
import Contact from './components/Contact/Contact';
import CreateContact from './components/CreateContact/CreateContact';

export default class App extends Component {
  state = {
    contacts: []
  }

  get(){ axios.get(`http://localhost:3000/contacts`)
    .then(res => {
      const contacts = res.data.data;
      this.setState({ contacts });
    })
  }
  componentDidMount() {
    this.get();
  }



  render() {
    console.log(this.state)
    return (
      <div className="wrapper1">        
        <Contact  contacts = {this.state.contacts} />
        <CreateContact/>
      </div>
    )
  }
}