import React, { Component } from 'react'
import './EmployeeStyles.css'
import Bottomleft from './Bottom_left';
import Bottomright from './Bottom_right';

class Bottom extends Component {
  render () {
    return (
      <div className="bottom_main col-lg-12 col-md-12">
        <Bottomleft/>
        <Bottomright/>
      </div>
    );
  }
}

export default Bottom
