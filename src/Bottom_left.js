import React, { Component } from 'react'
import './EmployeeStyles.css'
import CheckboxContainer from './CheckboxContainer';


class Bottomleft extends Component {
  searching() {
    const item=document.getElementsByClassName("search")[0];
    console.log(item);
  }
  render () {
    return (
      <div className="bottom_left col-lg-2 col-md-2">

        <input type="text" className="search col-lg-12 col-md-12" placeholder="Search Name..." /><br/><br/>
        
        <div className="line"></div>
        <span className='list_size'>Teams</span><br/>
          <div className="teams">
          <CheckboxContainer/>
          </div><br/>

        <div className="line"></div>
          <span className='list_size'>Experience</span><br/>
          <div className="experience">
          <input type="checkbox" value="1"/> 1-3 <br/> 
          <input type="checkbox" value="2"/> 3-5 <br/>
          <input type="checkbox" value="3"/> 5-10 <br/>
          <input type="checkbox" value="4"/> 10-15 <br/>
          <input type="checkbox" value="5"/> >15 <br/><br/>
          </div>

        <div className="line"></div>

      </div>    
    );
  }
}

export default Bottomleft
