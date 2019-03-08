import React from 'react';
import Details from './Details';
import employe from './employee.png'
import mail from './mail.png'
import './EmployeeStyles.css'
class DetailContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedItems: new Map(),
      showdiv:false
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const item = e.target.name;
    //const email = e.target.mail;
    const isChecked = e.target.checked;
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
  }
  fulldetails() {
    console.log('The link was clicked.');
  }
  handle(){
      this.setState({
        showdiv:true
      });
      // ReactDOM.render(<Fulldetails />, document.getElementById('bottom'));

  }
  render() {
    return (
      <React.Fragment>
        {
          Details.map(item => (
            <div onclick={this.handle} className="employlist col-lg-12 col-md-12 ">
            <label className="notbold Detailbox" key={item.key}>
              <span className='list_size'>{ item.EMPName}</span>
              <br/>
              {item.Designation},{item.Function}
              <br/>
              {item.Department}
              <br/>
              <img src={mail} className='icon' alt='Pic' />&nbsp;
              <a href="www.versanetworks.com">{item.Email}</a>
              <br/>
            </label>
            {/* <Detail name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} /> */}
            <img src={employe} className='photo' alt='Pic' />
            
            </div> 

          )
          )
        }
      </React.Fragment>
    );
  }
}

export default DetailContainer;