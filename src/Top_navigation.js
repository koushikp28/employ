import React, { Component } from 'react'
import './EmployeeStyles.css'
import Logo from './Header_logo.js'

class Topnavigation extends Component {
  render () {
    return (
      <div className='title-logo row'>
        <div className='col-lg-12 col-md-12 logo'>
          <Logo />
        </div>
      </div>
    )
  }
}

export default Topnavigation
