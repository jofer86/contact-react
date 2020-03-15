import React from 'react'
import './contact.scss';
import axios from 'axios';

const Contact = ({ contacts, refresh }) => {
  let k = 0;
  return (
    <div>
      <center><h1>Contact List</h1></center>
      <div className="wrapper">
        {contacts.map((contact) => {
          let killCommand= () => {
            axios.delete(`http://localhost:3000/contacts/${contact.id}`)           
            
          }
          console.log(contact);
          k++;
          return (
          <div className ="card cardWrap" key={k}>
            <div className ="card-body">
              <h5 className="card-title">Name: {contact.attributes.firstname} {contact.attributes.lastname}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{ contact.attributes.email }</h6>
              <p className="card-text">{ contact.attributes.phonenumber }</p>
              <button onClick={killCommand}>Kill!</button>
            </div>
          </div>
        )})}
      </div>
    </div>
  )
};

export default Contact