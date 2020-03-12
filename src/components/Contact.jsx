import React from 'react'


const Contact = ({ contacts }) => {
  let k = 0;
  return (
    <div>
      <center><h1>Contact List</h1></center>
      {contacts.map((contact) => {
        k++;
        return (
        <div className ="card" key={k}>
          <div className ="card-body">
            <h5 className="card-title">Name: {contact.attributes.firstname} {contact.attributes.lastname}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{ contact.attributes.email }</h6>
            <p className="card-text">{ contact.attributes.phonenumber }</p>
          </div>
        </div>
      )})}
    </div>
  )
};

export default Contact