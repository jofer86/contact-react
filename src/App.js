import React from 'react';
import axios from 'axios';
import Contact from './components/Contact.jsx'

export default class App extends React.Component {
  state = {
    contacts: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/contacts`)
      .then(res => {
        const contacts = res.data.data;
        this.setState({ contacts });
      })
  }

  render() {
    console.log(this.state)
    return (
      <Contact contacts = {this.state.contacts} />
    )
  }
}