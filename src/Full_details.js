import React, { Component } from 'react'
import './EmployeeStyles.css'
import mail from './mail.png'
import phone from './phone.png'
import bday from './bday.jpg'
import employe from './employee.png'

class Fulldetails extends Component {

  render () {
    return (
          <div className="bottom_right_display col-lg-5">
              <div className='col-lg-12'>
                <img src={employe} className='alldeatilspic  col-lg-4' alt='Pic' />
                <br/><br/>                
                <span className='list_size'>KOUSHIK</span><br/>Intern<br/>
              </div>
              <p>
                <div className="line col-lg-12"></div>
                <span className='list_size'>Contact:</span><br/>
                <img src={mail} className='icon' alt='Pic' />&nbsp;
                koushikp.reddy@gmail.com<br/>
                <img src={phone} className='icon' alt='Pic' />&nbsp;
                8333843217<br/>
                <div className="line col-lg-12"></div>
                <span className='list_size'>Experience :</span><br/>0.2<br/>
                <div className="line col-lg-12"></div>
                <img src={bday} className='icon' alt='Pic' />&nbsp;<br/>28-09-1997 <br/>
                <div className="line col-lg-12"></div>
                <span className='list_size'>Organization :</span><br/>Versa Networks<br/><br/>
                <div className="line col-lg-12"></div>
              </p>
          </div>
    );
  }
}

export default Fulldetails
