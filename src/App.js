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
  
  kill = (e) => {
    axios.delete(`http://localhost:3000/contacts/${ e.target.value }`)
    window.location.reload();
  }

  render() {    
    return (
      <div className="wrapper1">        
        <Contact  
          contacts = {this.state.contacts}
          kill= { this.kill }
        />
        <CreateContact/>
      </div>
    )
  }
}