import React, { Component } from 'react'
import './basic.css'
export class Register extends Component {
  render() {

    return (
      
      <><div id='head'>Register</div><div>
        <form action="">
        <div>
            <label htmlFor="name" id='nameLabel'>Name</label>
            <input type="text" name="name" id="logName" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="passw">Password</label>
            <input type="text" name="passw" id="passw" />
          </div>
          <button type="submit">Login</button>
        </form>
      </div></>
    )
  }
}

export default Register