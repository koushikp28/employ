import React, { Component } from 'react'
import logo from './versa-logo.png'
import './EmployeeStyles.css'

class Logo extends Component {
  render () {
    return (<div className='columns'>
      <div className='column'>
        <img src={logo} className='App-logo' alt='logo' />
      </div>
    </div>)
  }
}

export default Logo
