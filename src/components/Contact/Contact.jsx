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
            window.location.reload(false)     
            
          }
          console.log(contact);
          k++;
          return (
            <div className="card text-white bg-secondary">
              <div className="card-header"> <strong> { contact.attributes.firstname } { contact.attributes.lastname } </strong></div>
              <div className="card-body">
                <p className="card-text"> <strong> First Name:  </strong> { contact.attributes.firstname }</p>
                <p className="card-text"> <strong> Last Name:  </strong>  { contact.attributes.lastname }</p>
                <p className="card-text"> <strong>Email: </strong> { contact.attributes.email }</p>
                <p className="card-text"> <strong>Phone Number: </strong> { contact.attributes.phonenumber }</p>                
              </div>
              <div className="card-footer">
                <button className="btn btn-warning" onClick={killCommand}>Destroy!</button>
              </div>
            </div>
        )})}
      </div>
    </div>
  )
};

export default Contact