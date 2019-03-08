import React from 'react';
import checkboxes from './checkboxes';
import Checkbox from './Checkbox';
import Details from './Details';



class CheckboxContainer extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      checkedItems: new Map(),
    }

    // this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
 
  // handleChange(e) {
  //   const item = e.target.name;
  //   const isChecked = e.target.checked;
  //   this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
  // }
  
  handleClick(e) {
    e.preventDefault();
    const k=e.target.name;
    
    // for(var i=0;i<Details.length;i++){
    //     if(Details[i].Function===k){
    //       // FilteredDetails.push(Details[i])
    //       console.log(Details[i]);
    //     }
    // }
    var FilteredDetails = Details
    FilteredDetails=Details.filter(data => data.Function===k)
    console.log("Filtered list len:")
    console.log(FilteredDetails.length);
  }

  render() {
    
    return (
      <React.Fragment>
        {
          checkboxes.map(item => (
            <div className="checkboxes">
            <label className="notbold" >
              <Checkbox name={item.name} key={item} value={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleClick} />        
              &nbsp;
              {item.name}
            </label>
            <br/>
            </div>
          )
          )
        }
      </React.Fragment>
    );
  }
}

export default CheckboxContainer;