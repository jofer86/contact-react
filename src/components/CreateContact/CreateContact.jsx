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
                <div className="wrapper1">
                    <input 
                        type="text"
                        name="firstname" 
                        value={firstname} 
                        onChange={this.changeHandler}
                    />
                    <input 
                        type="text"
                        name="lastname"
                        value={lastname}
                        onChange={this.changeHandler}
                    />
                    <input 
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.changeHandler}
                    />
                    <input 
                        type="number"
                        name="phonenumber"
                        value={phonenumber}
                        onChange={this.changeHandler}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default CreateContact;