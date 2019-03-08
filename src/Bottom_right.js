import React, { Component } from 'react'
import './EmployeeStyles.css'
import DetailContainer from './DetailContainer';
import Fulldetails from './Full_details';

class Bottomright extends Component {

  constructor(props){
    super(props)
    this.state={display:false}
    this.handle=this.handle.bind(this)
  }
  handle(){
    this.setState({display:true})
    console.log(this.state.display);
    console.log("yes");
  }
  render () {
    
      return (
        <div className="bottom_right col-lg-10 col-md-10">
          <div className="bottom_right_list col-lg-4" onClick={this.handle}>
            <DetailContainer />
          </div>          
            <Shownext show={this.state.display}/>
        </div>
    );
   
  }
}

function Shownext(props){
  if(props.show){
    return <Fulldetails/>
  }else{
    return <div></div>
  }
}

export default Bottomright
