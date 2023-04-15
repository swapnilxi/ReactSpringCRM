import React, { Component } from 'react'

export default class AddContact extends Component {
    SubmitContact(event){
        event.preventDefault();

        let contact={
            firstName: this.refs.firstName.value,
            lastName: this.refs.lastName.value,
            email: this.refs.email.value,

        }
        fetch("http://localhost:8080/api/contacts",{
            method: "POST",
            headers:{
                "content-type":"application/json",
            },
            body: JSON.stringify(contact),
            }
        ).then(respose=> respose.json());
        window.location.reload();
    }
    
  render() {
    return (
      <div>
        <div class="row">
        <form class="col s12" onSubmit={this.SubmitContact.bind(this)}>
            <div class="row">
            <div class="input-field col s6">
                <input placeholder="Placeholder" ref="first_name" type="text" class="validate"/>
                <label htmlFor="first_name">First Name</label>
            </div>
            <div class="input-field col s6">
                <input ref="last_name" type="text" class="validate"/>
                <label htmlFor="last_name">Last Name</label>
            </div>
            </div>
            <div class="row">
            <div class="input-field col s12">
                <input ref="email" type="email" class="validate"/>
                <label htmlFor="email">Email</label>
            </div>
            </div>
            <div className='row'>
                <button className='waves-effect waves-light btn' type="submit" name="action">
                    submit
                </button>
            </div>
            
        </form>
        </div>
  </div>
    )
  }
}
