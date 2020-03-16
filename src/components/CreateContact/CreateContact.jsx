import React, { Component } from 'react';
import axios from 'axios';



class CreateContact extends Component{
    constructor(props) {
        super(props)
        this.state = {
            data: {
                attributes: {
                    firstname: '',
                    lastname: '',
                    email: '',
                    phonenumber: 0
                }
            }
        }
    }

    changeHandler = e => {
        this.setState( {
            data: {
                attributes: {
                    ...this.state.data.attributes,
                    [e.target.name]: e.target.value,
                }
            }
        })
    }
    submitHandler = e => {
        //e.preventDefault();
        console.log(this.state)
        axios
            .post('http://localhost:3000/contacts', this.state)
            .then( response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
            
    }
    render() {
        const { firstname, lastname, email, phonenumber } = this.state;
        return (
            <form onSubmit={this.submitHandler}>
                <div className="form-row d-flex justify-content-around">
                    <div className="col-2">
                        <input 
                            type="text"
                            name="firstname"
                            value={ firstname }
                            className="form-control"
                            placeholder="First Name"
                            onChange={ this.changeHandler }
                        />
                    </div>
                    <div className="col-2">
                        <input 
                            type="text"
                            name="lastname"
                            value={ lastname }
                            className="form-control"
                            placeholder="Last Name"
                            onChange={ this.changeHandler }
                        />
                    </div>
                    <div className="col-2">
                        <input 
                            type="email"
                            name="email"
                            value={ email }
                            className="form-control"
                            placeholder="Email"
                            onChange={ this.changeHandler }
                        />
                    </div>
                    <div className="col-2">
                        <input 
                            type="number"
                            name="phonenumber"
                            value={ phonenumber }
                            className="form-control"
                            placeholder="Phone Number"
                            onChange={ this.changeHandler }
                        />
                    </div>
                    <button className="btn btn-primary col-2"type="submit">Submit</button>                    
                </div>
                
            </form>
        )
    }
}

export default CreateContact;