import React, { Component } from 'react'

export default class Contacts extends Component {
    constructor(props){
        super(props);
        this.state={
            contacts:[],
        }
    }
  render() {
    return (
        <div>
        <p>Enter you Contact</p>
        </div>
    )
  }
}
