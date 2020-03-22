import React from 'react'
import './contact.scss';

const Contact = ({ contacts, kill }) => {
  let k = 0;
  return (
    <div>
      <center><h1>Contact List</h1></center>
      <div className="wrapper">
        {contacts.map((contact) => {         
          k++;
          return (
            <div className="card text-white bg-secondary" id="" key={ k }>
              <div className="card-header">
                 <strong> { contact.attributes.firstname } { contact.attributes.lastname } </strong>
              </div>

              <div className="card-body" id="">
                <p className="card-text"> <strong> First Name:  </strong> { contact.attributes.firstname }</p>
                <p className="card-text"> <strong> Last Name:  </strong>  { contact.attributes.lastname }</p>
                <p className="card-text"> <strong>Email: </strong> { contact.attributes.email }</p>
                <p className="card-text"> <strong>Phone Number: </strong> { contact.attributes.phonenumber }</p>                
              </div>

              <div className="card-footer">
                <button className="btn btn-danger" onClick={ kill } value={contact.id}>Destroy!</button>

              </div>
              
            </div>
        )})}
      </div>
    </div>
  )
};

export default Contact